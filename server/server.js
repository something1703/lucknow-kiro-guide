require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  if (req.body && req.body.phrase) {
    console.log(`  → Phrase: "${req.body.phrase}"`);
  }
  next();
});

// Path to product.md context file - try multiple locations for Vercel
function getContextFilePath() {
  const possiblePaths = [
    path.join(__dirname, '.kiro', 'product.md'),                 // Server directory (Vercel)
    path.join(__dirname, '..', '.kiro', 'product.md'),           // Local development
    path.join(process.cwd(), '.kiro', 'product.md'),             // Vercel root
    path.join('/var/task', '.kiro', 'product.md'),               // Vercel Lambda
  ];
  
  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      console.log(`✓ Found context file at: ${filePath}`);
      return filePath;
    }
  }
  
  console.error('✗ Context file not found in any location');
  console.error('Tried paths:', possiblePaths);
  return null;
}

const CONTEXT_FILE_PATH = getContextFilePath();

// Check if context file exists
function isContextLoaded() {
  return CONTEXT_FILE_PATH !== null;
}

// Load context file content
function loadContextFile() {
  try {
    if (!CONTEXT_FILE_PATH || !fs.existsSync(CONTEXT_FILE_PATH)) {
      console.error('Context file not found');
      return null;
    }
    const content = fs.readFileSync(CONTEXT_FILE_PATH, 'utf-8');
    console.log(`📄 Loaded product.md: ${content.length} characters`);
    return content;
  } catch (error) {
    console.error('Error reading context file:', error);
    return null;
  }
}

// Manual fallback parser - extracts data directly from product.md
function parseProductMdManually(phrase, contextContent) {
  try {
    // Normalize the search phrase
    const searchPhrase = phrase.toLowerCase().trim();
    
    // Split context into entries
    const entries = contextContent.split('### Entry');
    
    // Search for matching phrase
    for (const entry of entries) {
      const lines = entry.split('\n');
      let phraseMatch = null;
      let literalMeaning = '';
      let impliedMeaning = '';
      let toneCategory = '';
      let usageContext = '';
      let socialAppropriateness = '';
      let risks = '';
      let example = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('**Phrase**:')) {
          phraseMatch = line.replace('**Phrase**:', '').trim().replace(/"/g, '').toLowerCase();
        } else if (line.startsWith('**Literal Meaning**:')) {
          literalMeaning = line.replace('**Literal Meaning**:', '').trim();
        } else if (line.startsWith('**Implied Meaning**:')) {
          impliedMeaning = line.replace('**Implied Meaning**:', '').trim();
        } else if (line.startsWith('**Tone Category**:')) {
          toneCategory = line.replace('**Tone Category**:', '').trim();
        } else if (line.startsWith('**Usage Context**:')) {
          usageContext = line.replace('**Usage Context**:', '').trim();
        } else if (line.startsWith('**Social Appropriateness**:')) {
          socialAppropriateness = line.replace('**Social Appropriateness**:', '').trim();
        } else if (line.startsWith('**Risks / Misinterpretation Notes**:')) {
          risks = line.replace('**Risks / Misinterpretation Notes**:', '').trim();
        } else if (line.startsWith('**Example Conversation Use**:')) {
          example = lines.slice(i + 1, i + 5).join(' ').trim();
        }
      }
      
      // Check if this entry matches the search phrase
      if (phraseMatch && (
        phraseMatch.includes(searchPhrase) || 
        searchPhrase.includes(phraseMatch) ||
        literalMeaning.toLowerCase().includes(searchPhrase)
      )) {
        return {
          phrase,
          impliedMeaning: impliedMeaning || literalMeaning || 'Cultural meaning found in Lucknow knowledge base',
          toneCategory: toneCategory || 'Contextual',
          usageContext: usageContext || 'Common in Lucknow conversations',
          socialAppropriateness: socialAppropriateness || 'Context-dependent',
          risks: risks || 'None identified',
          explanation: `From Lucknow Knowledge Base: "${phraseMatch}" - ${impliedMeaning}. ${usageContext}`,
          rawAIResponse: null,
          fallback: true,
          manualParse: true
        };
      }
    }
    
    // No match found - return generic cultural response
    return {
      phrase,
      impliedMeaning: phrase,
      toneCategory: 'Contextual',
      usageContext: 'This phrase is part of Lucknow\'s cultural vocabulary',
      socialAppropriateness: 'Context-dependent - respect and politeness are key',
      risks: 'Without AI interpretation, exact cultural nuance may vary',
      explanation: 'This phrase wasn\'t found in our knowledge base, but Lucknow culture emphasizes indirect communication, respect for elders, and polite speech. Consider the relationship context and formality level.',
      rawAIResponse: null,
      fallback: true,
      manualParse: true
    };
    
  } catch (error) {
    console.error('Manual parse error:', error);
    return null;
  }
}

// Initialize OpenAI client for AI interpretation
const OpenAI = require('openai');
let openaiClient = null;

try {
  if (process.env.OPENAI_API_KEY) {
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    console.log('✓ OpenAI client initialized');
  } else {
    console.warn('⚠ OPENAI_API_KEY not set');
  }
} catch (error) {
  console.warn('⚠ OpenAI client not initialized:', error.message);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const contextLoaded = isContextLoaded();
  
  res.json({
    status: 'healthy',
    aiEnabled: openaiClient !== null,
    contextLoaded: contextLoaded,
    timestamp: new Date().toISOString()
  });
});

// Main interpretation endpoint
app.post('/api/interpret', async (req, res) => {
  const { phrase } = req.body;

  // Validate input
  if (!phrase || phrase.trim() === '') {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Phrase is required and cannot be empty'
    });
  }

  // Check if context file exists
  const contextContent = loadContextFile();
  if (!contextContent) {
    return res.status(503).json({
      error: 'Service Unavailable',
      message: 'Context file missing — Lucknow knowledge base not loaded'
    });
  }

  // Check if OpenAI client is available
  if (!openaiClient) {
    return res.status(503).json({
      error: 'Service Unavailable',
      message: 'AI service not initialized — check OPENAI_API_KEY'
    });
  }

  try {
    // Construct the prompt using Kiro knowledge base
    const systemPrompt = `You are a Lucknow Local Tehzeeb & Slang Interpreter. Use the following knowledge base to provide culturally accurate interpretations.

${contextContent}

When interpreting phrases, always provide:
1. impliedMeaning - the actual cultural meaning beyond literal translation
2. toneCategory - formal/informal/casual/respectful/playful/sarcastic
3. usageContext - when and where this phrase is used
4. socialAppropriateness - who can use it and in what situations
5. risks - potential misinterpretations or cultural mistakes
6. explanation - detailed cultural context

Respond ONLY with valid JSON in this exact format:
{
  "impliedMeaning": "...",
  "toneCategory": "...",
  "usageContext": "...",
  "socialAppropriateness": "...",
  "risks": "...",
  "explanation": "..."
}`;

    const userPrompt = `Interpret this phrase using Lucknow cultural context: "${phrase}"`;

    // Call OpenAI API with Kiro context
    let aiResponse;
    try {
      const completion = await openaiClient.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      });

      aiResponse = completion.choices[0].message.content;
    } catch (aiError) {
      console.error('OpenAI API error:', aiError);
      console.log('🔄 Attempting manual fallback from product.md...');
      
      // Try manual parsing fallback
      const manualResult = parseProductMdManually(phrase, contextContent);
      if (manualResult) {
        console.log('✓ Manual fallback successful');
        return res.json(manualResult);
      }
      
      // Last resort fallback
      const isRateLimitError = aiError.status === 429;
      const errorMessage = isRateLimitError 
        ? 'OpenAI API rate limit reached. Showing data from Lucknow knowledge base instead.'
        : 'AI service unavailable. Showing data from Lucknow knowledge base.';
      
      return res.json({
        phrase,
        impliedMeaning: phrase,
        toneCategory: 'Unknown',
        usageContext: 'Unable to determine',
        socialAppropriateness: 'Unknown',
        risks: 'Unable to interpret culturally — literal meaning only',
        explanation: errorMessage,
        rawAIResponse: null,
        fallback: true,
        rateLimitError: isRateLimitError
      });
    }

    // Parse AI response and structure it
    const structuredResponse = parseAIResponse(aiResponse, phrase);

    res.json(structuredResponse);

  } catch (error) {
    console.error('Error processing interpretation:', error);
    
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Unable to interpret culturally — literal meaning only',
      phrase,
      fallback: true
    });
  }
});

// Helper function to parse AI response
function parseAIResponse(aiResponse, originalPhrase) {
  try {
    // Parse JSON response from OpenAI
    const parsed = JSON.parse(aiResponse);
    
    return {
      phrase: originalPhrase,
      impliedMeaning: parsed.impliedMeaning || originalPhrase,
      toneCategory: parsed.toneCategory || 'Neutral',
      usageContext: parsed.usageContext || 'General usage',
      socialAppropriateness: parsed.socialAppropriateness || 'Context-dependent',
      risks: parsed.risks || 'None identified',
      explanation: parsed.explanation || 'No additional context available',
      rawAIResponse: aiResponse
    };

  } catch (error) {
    console.error('Error parsing AI response:', error);
    return {
      phrase: originalPhrase,
      impliedMeaning: originalPhrase,
      toneCategory: 'Unknown',
      usageContext: 'Unable to determine',
      socialAppropriateness: 'Unknown',
      risks: 'Unable to interpret culturally — literal meaning only',
      explanation: 'The response could not be parsed properly.',
      rawAIResponse: aiResponse,
      fallback: true
    };
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Lucknow Kiro Guide Backend`);
  console.log(`   Server running on http://localhost:${PORT}`);
  console.log(`   Context file: ${isContextLoaded() ? '✓ Loaded' : '✗ Missing'}`);
  console.log(`   Context path: ${CONTEXT_FILE_PATH}`);
  console.log(`   OpenAI: ${openaiClient ? '✓ Initialized' : '✗ Not initialized'}`);
  console.log(`\n📍 Endpoints:`);
  console.log(`   GET  /api/health`);
  console.log(`   POST /api/interpret\n`);
});

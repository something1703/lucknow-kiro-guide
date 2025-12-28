# 🕌 Lucknow Tehzeeb Interpreter

**Kiro Heroes Week 5 Challenge: "The Local Guide"**

AI-powered cultural interpreter that decodes Lucknow's indirect communication and polite phrases using custom Kiro context. Built with 928 lines of cultural knowledge encoding Lucknow's tehzeeb (etiquette), this tool transforms literal translations into culturally-aware interpretations.

## 🌐 Live Demo

- **🎨 Frontend**: https://lucknow-kiro-guide-5t9d-d8nksu1si.vercel.app/
- **⚡ Backend API**: https://lucknow-kiro-guide.vercel.app
- **📦 GitHub**: https://github.com/something1703/lucknow-kiro-guide

## 🎯 What It Does

Lucknow is famous for its **tehzeeb** - a culture of extreme politeness where "no" is never said directly. This interpreter helps decode:
- **Indirect Refusals**: "Dekhte hain" (Let's see) = Probably not happening
- **Polite Disagreement**: "Aap bilkul sahi keh rahe hain" + "lekin..." = I respectfully disagree
- **Respect Markers**: "Chaliye ji" - Understanding when "ji" adds cultural weight
- **Social Context**: When to use formal vs casual speech

## ✨ Key Features

### 🎨 Beautiful Glass Morphism UI
- Transparent cards with backdrop blur effects
- Lucknow cityscape background
- Smooth animations (fade-in, slide-up, hover effects)
- Responsive design

### 🧠 Dual-Mode Intelligence
1. **AI Mode** (Primary): OpenAI GPT-4o-mini with full 49,031 character context
2. **Fallback Mode** (Backup): Direct product.md parsing when AI unavailable

### 📊 Cultural Analysis Breakdown
- 💭 **Implied Meaning** - What they actually mean
- 🎭 **Tone Category** - Polite/Casual/Respectful/Sarcastic
- 📍 **Usage Context** - When and where to use it
- ✓ **Social Appropriateness** - Who can say it to whom
- ⚠️ **Cultural Risks** - Common misinterpretations

## 🏗️ Architecture

### The Kiro Pattern
```
User Input → Backend loads .kiro/product.md (49KB) 
           → Sends to OpenAI as system context
           → AI generates culturally-aware interpretation
           → Frontend displays with analysis cards
```

### Smart Fallback System
When OpenAI API is unavailable (rate limits, errors):
1. Backend automatically searches `product.md` for phrase
2. Extracts: implied meaning, tone, usage context, risks
3. Returns cultural data directly from knowledge base
4. If no match: provides generic Lucknow cultural guidance

### Environment-Based Config
- **Local Dev**: `http://localhost:3001` (automatic detection)
- **Production**: `https://lucknow-kiro-guide.vercel.app` (NODE_ENV check)

## 🎯 Challenge Compliance

✅ **Custom Context File**: `.kiro/product.md` (928 lines, 49,031 characters)  
✅ **Cultural Encoding**: Phrase entries, behavioral rules, tone classification  
✅ **.kiro/ at Project Root**: Visible in GitHub repo  
✅ **AI Utilization**: OpenAI GPT-4o-mini with full context loading  
✅ **Public Repository**: https://github.com/something1703/lucknow-kiro-guide  
✅ **Live Deployment**: Working on Vercel  
✅ **Screenshots**: 8 screenshots in `docs/screenshots/`

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- OpenAI API key

### Backend Setup
```bash
cd server
npm install

# Create .env file
echo "OPENAI_API_KEY=your-key-here" > .env
echo "PORT=3001" >> .env

npm run dev
```

### Frontend Setup
```bash
cd app
npm install

# Create .env.local for development
echo "REACT_APP_API_URL=http://localhost:3001" > .env.local

npm start
```

Visit: http://localhost:3000

## 📁 Project Structure

```
lucknow-kiro-guide/
├── .kiro/
│   ├── product.md          # 928 lines of Lucknow cultural knowledge
│   ├── prompts.json        # Kiro configuration
│   └── tasks.json          # Project metadata
├── app/                    # React frontend
│   ├── src/
│   │   ├── App.js          # Main component with glass morphism
│   │   ├── App.css         # Custom styling (transparent cards, animations)
│   │   └── index.js        # React 18 entry point
│   ├── public/
│   │   └── Things-to-Do-in-Lucknow.jpg  # Background image
│   ├── .env.local          # Dev API URL
│   └── .env.production     # Production API URL
├── server/                 # Express backend
│   ├── .kiro/
│   │   └── product.md      # Copy for Vercel deployment
│   ├── server.js           # API with fallback parser
│   ├── .env                # OpenAI API key
│   └── vercel.json         # Serverless config
├── docs/
│   └── screenshots/        # 8 screenshots of working app
└── README.md
```

## 🛠️ Tech Stack

**Frontend**:
- React 18.2.0 with Hooks
- Glass Morphism CSS (backdrop-filter, rgba transparency)
- Custom animations (@keyframes)
- Environment-based API config

**Backend**:
- Express.js 4.18.2
- OpenAI SDK 4.20.1 (GPT-4o-mini)
- Manual fallback parser (product.md search)
- CORS enabled

**Deployment**:
- Vercel (Frontend + Serverless Backend)
- GitHub Actions auto-deploy

**Kiro Architecture**:
- Context loading: 49,031 characters per request
- Behavioral rules: Polite disagreement, elder respect, indirect refusal
- Phrase database: 50+ entries with usage examples

## 📸 Screenshots

View all 8 screenshots in `docs/screenshots/`:
- Homepage with Glass Morphism UI
- Cultural Interpretation - "Chaliye ji"
- Interpretation - "Dekhte hain"
- Backend API responses
- Fallback mode demonstration
- Mobile responsive views

## 🎓 How It Works

### The Cultural Knowledge Base
`product.md` contains structured entries:
```markdown
**Phrase**: "Chaliye ji"
**Literal Meaning**: Let's go
**Implied Meaning**: Polite invitation showing respect
**Tone Category**: respectful
**Usage Context**: With elders, guests, formal settings
**Social Appropriateness**: Essential with elders; omission is rude
**Risks**: May seem overly formal with close friends
```

### AI System Prompt
The backend sends the entire 49KB context to OpenAI:
```javascript
"You are a Lucknow Local Tehzeeb & Slang Interpreter. 
Use the following knowledge base to provide culturally accurate interpretations..."
```

### Manual Fallback Parser
When AI fails, the backend:
1. Splits product.md into entries
2. Searches for phrase match (case-insensitive)
3. Extracts structured fields
4. Returns with `manualParse: true` flag

## ⚠️ Known Limitations

- **OpenAI Free Tier**: 3 requests/min limit (solved with smart fallback)
- **Fallback Accuracy**: Manual parser is literal; AI provides deeper context
- **Preview URLs**: Use production domain for stable API

## 🚀 Deployment Instructions

### Backend (Vercel Serverless)
```bash
cd server
vercel
# Set OPENAI_API_KEY in dashboard: Settings → Environment Variables
```

### Frontend (Vercel Static)
```bash
cd app
vercel --prod
```

The frontend automatically detects production environment and uses the correct API URL.

## 🤝 Contributing

This is a hackathon submission project. For questions about Lucknow culture or the Kiro pattern, open an issue!

## 📜 License

MIT License - Built for Kiro Heroes Week 5 Challenge

## 🙏 Acknowledgments

- **Kiro Framework**: For the knowledge base pattern
- **Lucknow's Tehzeeb**: The cultural foundation
- **OpenAI**: GPT-4o-mini for AI interpretation
- **Vercel**: Seamless deployment platform

---

**Made with 🕌 for Kiro Heroes Week 5 Challenge**  
*Decoding Lucknow's beautiful culture, one phrase at a time*

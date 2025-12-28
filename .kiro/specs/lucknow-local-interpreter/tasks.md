# Implementation Plan: Lucknow Local Tehzeeb & Slang Interpreter

## Overview

This implementation focuses on populating structured knowledge files that demonstrate how cultural intelligence can steer AI behavior. The primary deliverable is a comprehensive knowledge base in `.kiro/product.md` with supporting configuration files for hackathon evaluation.

## Tasks

- [x] 1. Create knowledge base structure in .kiro/product.md
  - Set up four main sections: Phrase Dictionary, Behavioral Rules, Local Context Intelligence, Test Prompts & Expected Behavior
  - Add section headers and schema documentation
  - Include brief explanation of each section's purpose
  - _Requirements: 6.3, 6.4_

- [ ] 2. Populate Phrase Dictionary with core expressions
  - [x] 2.1 Add 10 polite/respectful phrases
    - Include greetings, farewells, and respectful address patterns
    - Cover "pehle aap", "meharbani", "aap" usage
    - Each entry must follow complete schema: Phrase, Literal Meaning, Implied Meaning, Tone Category, Usage Context, Social Appropriateness, Risks/Misinterpretation Notes, Example Conversation Use
    - _Requirements: 1.1, 1.3, 1.4, 1.5, 6.1_

  - [x] 2.2 Add 8 indirect refusal and disagreement phrases
    - Include "abhi thoda kaam hai" and similar patterns
    - Cover polite ways to decline invitations or requests
    - Mark tone as "polite" and explain indirectness
    - _Requirements: 1.1, 1.3, 1.4, 1.5, 6.1_

  - [x] 2.3 Add 7 sarcastic and teasing expressions
    - Include local humor patterns and playful teasing
    - Clearly mark risks of misinterpretation
    - Explain when teasing is appropriate vs inappropriate
    - _Requirements: 1.1, 1.3, 1.4, 1.5, 6.1_

  - [ ] 2.4 Write property test for phrase schema compliance
    - **Property 1: Complete Phrase Entry Retrieval**
    - **Validates: Requirements 1.1, 1.4, 1.5**

  - [ ] 2.5 Write property test for multiple context handling
    - **Property 2: Multiple Context Handling**
    - **Validates: Requirements 1.2**

- [ ] 3. Encode Behavioral Rules section
  - [ ] 3.1 Define polite disagreement rules
    - Provide explicit reasoning guidelines
    - Include 3-4 examples with correct/incorrect behaviors
    - Explain when and how to disagree politely
    - _Requirements: 5.1, 6.2_

  - [ ] 3.2 Define indirect refusal patterns
    - Document common refusal structures
    - Provide usage examples for each pattern
    - Explain social contexts where each applies
    - _Requirements: 5.2, 6.2_

  - [ ] 3.3 Define respect markers and usage contexts
    - Document "aap", "meharbani", "pehle aap", "janab"
    - Specify when each marker is required vs optional
    - Explain formality levels and relationship contexts
    - _Requirements: 5.3, 6.2_

  - [ ] 3.4 Define humor norms and boundaries
    - Explain what types of humor are acceptable
    - Define boundaries (topics to avoid, contexts where humor is inappropriate)
    - Provide examples of appropriate teasing
    - _Requirements: 5.4, 6.2_

  - [ ] 3.5 Define elder interaction etiquette
    - Document elevated politeness rules for elders
    - Specify required respect markers and speech patterns
    - Explain what behaviors are disrespectful
    - _Requirements: 5.5, 6.2_

  - [ ] 3.6 Write property test for schema compliance
    - **Property 12: Schema Compliance**
    - **Validates: Requirements 6.1, 6.2**

- [ ] 4. Add Local Context Intelligence section (optional but valuable)
  - [ ] 4.1 Add time-based crowd behavior patterns
    - Document peak times at popular locations
    - Explain local commute patterns and metro etiquette
    - _Requirements: 7.1_

  - [ ] 4.2 Add authentic vs tourist spot distinctions
    - List authentic local spots with cultural context
    - Explain what makes them authentic vs touristy
    - _Requirements: 7.2_

  - [ ] 4.3 Add culturally-aware safety hints
    - Provide safety guidance with local context
    - Avoid generic tourist warnings
    - _Requirements: 7.3_

  - [ ] 4.4 Add food ordering etiquette
    - Document local restaurant and street food etiquette
    - Explain polite ordering patterns
    - _Requirements: 7.4_

- [ ] 5. Checkpoint - Review knowledge base completeness
  - Verify at least 25 phrase entries exist
  - Verify all behavioral rule categories are covered
  - Ensure all entries follow schema format
  - Ask user if any cultural aspects are missing

- [ ] 6. Create Test Prompts & Expected Behavior section
  - [ ] 6.1 Add 4 prompts demonstrating tone interpretation
    - Show generic AI missing tone nuances
    - Show Lucknow-aware AI correctly identifying polite/sarcastic/respectful tones
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ] 6.2 Add 4 prompts demonstrating implied meaning recognition
    - Show generic AI taking phrases literally
    - Show Lucknow-aware AI understanding indirect refusals and requests
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ] 6.3 Add 4 prompts demonstrating cultural appropriateness
    - Show generic AI giving blunt or inappropriate responses
    - Show Lucknow-aware AI following tehzeeb patterns and respect markers
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ] 6.4 Write property test for evaluation format completeness
    - **Property 13: Evaluation Format Completeness**
    - **Validates: Requirements 8.3, 8.4**

- [ ] 7. Populate .kiro/prompts.json
  - Extract 6-8 evaluation prompts from the Test Prompts section
  - Format as JSON array with prompt_id, prompt_text, generic_response, lucknow_aware_response, demonstrates, explanation fields
  - Ensure prompts cover tone, implied meaning, and cultural appropriateness
  - _Requirements: 9.2_

- [ ] 8. Populate .kiro/tasks.json
  - [ ] 8.1 Add "run-local-guide" task
    - Task should demonstrate interpreter functionality
    - Include sample prompts to test
    - _Requirements: 9.3_

  - [ ] 8.2 Add "evaluate-local-context" task
    - Task should run evaluation prompts
    - Compare generic vs Lucknow-aware responses
    - _Requirements: 9.3_

- [ ] 9. Final checkpoint - Validate hackathon submission format
  - Verify .kiro/product.md is comprehensive and high-quality
  - Verify .kiro/prompts.json has 6-8 prompts
  - Verify .kiro/tasks.json has both required tasks
  - Ensure content focuses on cultural nuance, not tourist information
  - Run through evaluation prompts to demonstrate behavioral shift
  - Ask user if ready for submission

## Notes

- All tasks are required for comprehensive implementation
- Focus is on knowledge encoding quality, not code implementation
- Each phrase entry must demonstrate cultural intelligence, not just translation
- Behavioral rules must be explicit and actionable, not vague guidelines
- Evaluation prompts must clearly show before/after behavioral differences
- Content should reflect lived experience, not Wikipedia-style facts

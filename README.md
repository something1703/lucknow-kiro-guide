# 🕌 Lucknow Tehzeeb Interpreter

**Kiro Heroes Week 5 Challenge: "The Local Guide"**

AI-powered cultural interpreter that decodes Lucknow's indirect communication and polite phrases using custom Kiro context.

## 🎯 Challenge Overview

**Task**: Build a local guide using custom context (product.md)  
**Solution**: Lucknow cultural interpreter with 49,031 characters of knowledge  
**Tech**: React + Express + OpenAI GPT-4o-mini + Kiro Architecture

## 🧠 The Kiro Approach

This project uses `.kiro/product.md` (928 lines) to encode:
- Phrase entries with implied meanings
- Behavioral rules for indirect communication  
- Tone analysis frameworks
- Social appropriateness guidelines

The backend loads this context on every request (49,031 chars), steering AI from generic to culturally-aware responses.

## ✨ Features

- 🎨 Glass Morphism UI with Lucknow background
- 💭 Implied Meaning interpretation
- 🎭 Tone Category analysis
- 📍 Usage Context detection
- ✓ Social Appropriateness scoring
- ⚠️ Cultural Risk warnings

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/something1703/lucknow-kiro-guide.git
cd lucknow-kiro-guide

# Backend
cd server
npm install
cp .env.example .env
# Add OPENAI_API_KEY to .env
npm run dev

# Frontend (new terminal)
cd ../app
npm install
npm start
```

Visit: http://localhost:3000

## 📁 Structure

```
├── .kiro/product.md    # 928 lines of cultural knowledge (REQUIRED)
├── app/                # React frontend
└── server/             # Express API
```

## 🏆 Hackathon Compliance

✅ Custom context (`.kiro/product.md`)  
✅ Encodes Lucknow cultural nuances  
✅ `.kiro/` at project root  
✅ Public GitHub repo

## 🛠️ Tech Stack

- React 18 + Glass Morphism CSS
- Express.js + Node.js
- OpenAI GPT-4o-mini
- Kiro knowledge base pattern

## 📝 Environment

```env
OPENAI_API_KEY=sk-your-key-here
PORT=3001
```

---

**Built with ❤️ for Kiro Heroes Week 5**

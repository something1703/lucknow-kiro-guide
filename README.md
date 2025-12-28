# 🕌 Lucknow Tehzeeb Interpreter

**Kiro Heroes Week 5 Challenge: "The Local Guide"**

AI-powered cultural interpreter that decodes Lucknow's indirect communication and polite phrases using custom Kiro context.

## 🌐 Live Deployments

- **Frontend**: https://lucknow-kiro-guide-5t9d-d8nksu1si.vercel.app/
- **Backend API**: https://lucknow-kiro-guide-rfcdk5svj-rvsrathore17-gmailcoms-projects.vercel.app
- **GitHub**: https://github.com/something1703/lucknow-kiro-guide

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
- 🔄 **Smart Fallback**: When AI is unavailable, automatically parses product.md for direct matches

## 🏗️ Architecture

**Dual-Mode Operation**:
1. **AI Mode** (Primary): OpenAI GPT-4o-mini with full 49KB context
2. **Fallback Mode** (Backup): Direct product.md parsing when AI unavailable

**Environment-Based Config**:
- Local dev: `http://localhost:3001` (from `.env.local`)
- Production: Vercel backend URL (from `.env.production`)

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
- Manual fallback parser

## 📝 Environment

**Backend** (`server/.env`):
```env
OPENAI_API_KEY=sk-your-key-here
PORT=3001
```

**Frontend** (`.env.local` for dev, `.env.production` for build):
```env
REACT_APP_API_URL=http://localhost:3001
```

## ⚠️ Known Issues & Solutions

### Production Deployment
- **Issue**: OpenAI API rate limits on free tier (3 req/min)
- **Solution**: Smart fallback automatically searches product.md when AI fails
- **Fix**: Add payment method to OpenAI account for higher limits

### Local vs Production
- **Solution**: Environment variables auto-detect local vs production
- Local: Uses `localhost:3001`
- Production: Uses Vercel backend URL

## 🚀 What Works

✅ **Local Development**: Full AI + manual fallback working  
✅ **GitHub Repo**: Complete with .kiro/ directory  
✅ **Frontend Deployed**: Live on Vercel  
✅ **Backend Deployed**: API endpoints accessible  
✅ **Context Loading**: 49,031 characters loaded successfully  
✅ **Fallback System**: Parses product.md when AI unavailable

---

**Built with ❤️ for Kiro Heroes Week 5**

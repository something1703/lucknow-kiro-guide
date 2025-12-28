# Deployment Guide

## 📦 Deploy to Vercel

### Backend (Serverless API)

```bash
cd server
npm install -g vercel
vercel
```

**Environment Variables** (in Vercel dashboard):
- `OPENAI_API_KEY` = your-key-here

Copy deployment URL (e.g., `https://your-backend.vercel.app`)

---

### Frontend

1. **Update API URL** in `app/src/App.js`:
```javascript
// Change from:
fetch('http://localhost:3001/api/interpret', {

// To:
fetch('https://your-backend.vercel.app/api/interpret', {
```

2. **Deploy**:
```bash
cd ../app
vercel --prod
```

---

## ✅ Final Checklist

- [ ] Backend deployed with `OPENAI_API_KEY` set
- [ ] Frontend updated with production API URL
- [ ] Frontend deployed
- [ ] Screenshots captured (working app)
- [ ] GitHub repo pushed
- [ ] Technical blog post written

---

## 📸 Screenshots

Place app screenshots in `docs/screenshots/` directory

---

## 📝 Blog Post (AWS Builder Center)

**Topic**: "Encoding Lucknow's Tehzeeb: How Kiro Translates Indirect Communication"

**Key Points**:
1. Challenge: Lucknow's indirect phrases ("आइए न" = obligation, not invitation)
2. Solution: `.kiro/product.md` with 928 lines encoding rules
3. Architecture: Context loaded per request (49,031 chars)
4. Results: AI shifts from generic to culturally-aware interpretation
5. Learning: Kiro pattern bridges code and nuance

---

**Deadline**: Sunday, 28th December at 11:59 PM IST

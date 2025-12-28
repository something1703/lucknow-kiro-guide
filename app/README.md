# Lucknow Kiro Guide - React Frontend

Beautiful React UI for the Lucknow Local Culture & Tehzeeb Interpreter.

## Features

✨ **Modern UI** - Clean, gradient design with smooth animations
🎯 **Cultural Interpretation** - Decode Lucknow phrases with AI
🔍 **Real-time Results** - Instant cultural analysis
💡 **Example Phrases** - Quick-start with common expressions
📱 **Responsive** - Works on desktop and mobile

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Make sure backend is running:**
   - The backend should be running on `http://localhost:3001`
   - See `/server/README.md` for backend setup

The app will open at `http://localhost:3000`

## Usage

1. Enter a Lucknow phrase or expression
2. Click "Interpret Meaning"
3. View the cultural interpretation including:
   - 💭 Implied Meaning
   - 🎭 Tone Category
   - 📍 Usage Context
   - ✓ Social Appropriateness
   - ⚠️ Risks / Cultural Notes
   - 📖 Cultural Explanation

## Example Phrases to Try

- "Abhi thoda kaam hai" - Polite way to decline
- "Chaliye ji" - Respectful acknowledgment
- "Dekhte hain" - Non-committal response
- "Aap ka kasht hua" - Expressing gratitude for someone's effort

## Architecture

```
User Input → React UI → API Call to Backend (port 3001) →
OpenAI with Kiro Context → Structured Response → Display Results
```

## Configuration

The app is configured to proxy API requests to `http://localhost:3001` (see `package.json`).

If you need to change the backend URL, update the `fetch` calls in `src/App.js`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technologies

- React 18
- Modern CSS with gradients and animations
- Fetch API for backend communication
- Responsive design

import React, { useState } from 'react';
import './App.css';

function App() {
  const [phrase, setPhrase] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!phrase.trim()) {
      setError('Please enter a phrase to interpret');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' 
        ? 'https://lucknow-kiro-guide.vercel.app' 
        : 'http://localhost:3001');
      const response = await fetch(`${apiUrl}/api/interpret`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phrase: phrase.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to interpret phrase');
      }

      setResult(data);
    } catch (err) {
      setError(err.message || 'Unable to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  const examplePhrases = [
    "Abhi thoda kaam hai",
    "Chaliye ji",
    "Dekhte hain",
    "Aap ka kasht hua"
  ];

  const handleExampleClick = (example) => {
    setPhrase(example);
    setResult(null);
    setError(null);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">🕌 Lucknow Tehzeeb Interpreter</h1>
          <p className="subtitle">
            Decode the cultural meaning behind Lucknow's polite phrases and indirect communication
          </p>
        </header>

        <div className="card">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="phrase" className="label">
                Enter a Lucknow phrase or expression:
              </label>
              <textarea
                id="phrase"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                placeholder="e.g., Abhi thoda kaam hai..."
                className="textarea"
                rows="3"
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Interpreting...' : 'Interpret Meaning'}
            </button>
          </form>

          <div className="examples">
            <p className="examples-label">Try these examples:</p>
            <div className="examples-grid">
              {examplePhrases.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => handleExampleClick(example)}
                  className="example-btn"
                  type="button"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="alert alert-error">
            <span className="alert-icon">⚠️</span>
            <div>
              <strong>Error:</strong> {error}
              {error.includes('connect') && (
                <p className="alert-hint">
                  Make sure the backend server is running on port 3001
                </p>
              )}
            </div>
          </div>
        )}

        {result && (!result.fallback || result.manualParse) && (
          <div className="result-card">
            <div className="result-header">
              <h2 className="result-title">Cultural Interpretation</h2>
              <span className="result-badge">AI-Powered</span>
            </div>

            <div className="result-phrase">
              <strong>Original Phrase:</strong> "{result.phrase}"
            </div>

            <div className="result-grid">
              <div className="result-item">
                <div className="result-item-label">
                  Implied Meaning
                </div>
                <div className="result-item-content">{result.impliedMeaning}</div>
              </div>

              <div className="result-item">
                <div className="result-item-label">
                  Tone Category
                </div>
                <div className="result-item-content">{result.toneCategory}</div>
              </div>

              <div className="result-item">
                <div className="result-item-label">
                  Usage Context
                </div>
                <div className="result-item-content">{result.usageContext}</div>
              </div>

              <div className="result-item">
                <div className="result-item-label">
                  Social Appropriateness
                </div>
                <div className="result-item-content">{result.socialAppropriateness}</div>
              </div>

              <div className="result-item full-width">
                <div className="result-item-label">
                  Risks / Cultural Notes
                </div>
                <div className="result-item-content">{result.risks}</div>
              </div>

              <div className="result-item full-width">
                <div className="result-item-label">
                  Cultural Explanation
                </div>
                <div className="result-item-content">{result.explanation}</div>
              </div>
            </div>
          </div>
        )}

        {result && result.fallback && !result.manualParse && (
          <div className="alert alert-warning">
            <span className="alert-icon">⚠️</span>
            <div>
              <strong>Fallback Mode:</strong> Context not loaded — interpretation may be literal.
              <p className="alert-hint">
                Check if .kiro/product.md exists and the AI service is configured properly.
              </p>
            </div>
          </div>
        )}

        <footer className="footer">
          <p>Powered by Kiro Knowledge Base × OpenAI GPT-4</p>
          <p className="footer-hint">
            Using <code>.kiro/product.md</code> for cultural context
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;


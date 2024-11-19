import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React casa shordie App</h1>
          <p>monkey!</p>
          <button className="toggle-button" onClick={handleToggle}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
          {showMore && (
              <div className="extra-content">
                <p>
                  wagwan shordie i know mans s trying to get some jc's with the mandems and slide on waste yutes and then slide into some cheeks
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Learn to hop on this meatcoaster
                </a>
              </div>
          )}
          <footer>
            <p>
              Made with 💙 by [sammy skinny penis] |{' '}
              <a
                  href="https://netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Deployed on Netlify
              </a>
            </p>
          </footer>
        </header>
      </div>
  );
}

export default App;
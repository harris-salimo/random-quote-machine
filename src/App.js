import React, { useEffect, useState } from "react";
import quotes from "./models/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({
    text: "Welcome to my random quote machine",
    author: "Harris Maila Salimo",
  });

  const getRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  const getRandomQuote = () => {
    const index = getRandomIndex();
    setQuote(quotes[index]);
  };

  useEffect(() => {
    setInterval(getRandomQuote, 5000);
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author} -</p>
        <button className="btn btn-secondary" onClick={() => getRandomQuote()}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;

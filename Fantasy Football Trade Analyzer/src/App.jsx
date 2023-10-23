
import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [resultsLeft, setResultsLeft] = useState([]); // Results for left search bar
  const [resultsRight, setResultsRight] = useState([]); // Results for right search bar

  return (
    <div className="App">
      <h1>Fantasy Football Trade Analyzer</h1>
      <div className="search-bar-container">
        <div className="individual-search-container">
          <SearchBar setResults={setResultsLeft} />
          {resultsLeft && resultsLeft.length > 0 && (
            <SearchResultsList results={resultsLeft} />
          )}
        </div>
        <div className="individual-search-container">
          <SearchBar setResults={setResultsRight} />
          {resultsRight && resultsRight.length > 0 && (
            <SearchResultsList results={resultsRight} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [resultsLeft, setResultsLeft] = useState([]);
  const [resultsRight, setResultsRight] = useState([]);
  const [selectedNameLeft, setSelectedNameLeft] = useState("");
  const [selectedNameRight, setSelectedNameRight] = useState("");

  return (
    <div className="App">
      <h1>Fantasy Football Trade Analyzer</h1>
      <div className="search-bar-container">
        <div className="individual-search-container">
          <SearchBar
            setResults={setResultsLeft}
            selectedName={selectedNameLeft}
            setSelectedName={setSelectedNameLeft}
          />
          {resultsLeft && resultsLeft.length > 0 && (
            <SearchResultsList
              results={resultsLeft}
              selectedName={selectedNameLeft}
              setSelectedName={setSelectedNameLeft}
            />
          )}
        </div>
        <div className="individual-search-container">
          <SearchBar
            setResults={setResultsRight}
            selectedName={selectedNameRight}
            setSelectedName={setSelectedNameRight}
          />
          {resultsRight && resultsRight.length > 0 && (
            <SearchResultsList
              results={resultsRight}
              selectedName={selectedNameRight}
              setSelectedName={setSelectedNameRight}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
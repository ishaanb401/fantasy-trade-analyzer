import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("")//https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000&active=true")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); //
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.fullName &&
            user.fullName.toLowerCase().includes(value)
          );
        });
         setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.sleeper.app/v1/players/nfl")
      .then((response) => response.json())
      .then((data) => {
        // Check the structure of the response data
        console.log(data);
        
        if (typeof data === 'object') {
          // Convert the object properties to an array and filter it
          const results = Object.values(data).filter((user) => {
            return user && user.full_name && user.full_name.toLowerCase().includes(value);
          });
          console.log(results);
          setResults(results);
        } else {
          console.error("API response is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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



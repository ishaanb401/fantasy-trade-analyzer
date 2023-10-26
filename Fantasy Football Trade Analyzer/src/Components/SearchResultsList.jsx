// import "./SearchResultsList.css";
// import { SearchResult } from "./SearchResult";

// export const SearchResultsList = ({ results }) => {
//   return (
//     <div className="results-list">
//       {results.map((result, id) => {
//         return <SearchResult result={result.full_name} key={id} />;
//       })}
//     </div>
//   );
// };

// import "./SearchResultsList.css";
// import { SearchResult } from "./SearchResult";

// export const SearchResultsList = ({ results, setSelectedName }) => {
//   const handleClick = (result) => {
//     setSelectedName(result);
//   };

//   return (
//     <div className="results-list">
//       {results.map((result, id) => {
//         return (
//           <SearchResult
//             result={result.full_name}
//             key={id}
//             onClick={() => handleClick(result.full_name)}
//           />
//         );
//       })}
//     </div>
//   );
// };


import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, selectedName, setSelectedName }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <SearchResult
            result={result.full_name}
            key={id}
            onClick={() => {
              setSelectedName(result.full_name);
            }}
          />
        );
      })}
    </div>
  );
};

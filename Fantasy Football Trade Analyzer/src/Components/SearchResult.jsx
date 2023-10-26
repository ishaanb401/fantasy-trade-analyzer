// import "./SearchResult.css";

// export const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };


import "./SearchResult.css";

export const SearchResult = ({ result, selected }) => {
  return (
    <div
      className={`search-result ${result === selected ? "selected" : ""}`}
    >
      {result}
    </div>
  );
};



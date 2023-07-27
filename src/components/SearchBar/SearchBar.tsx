import React from "react";

type SearchProps = {
  onClick: () => void;
};

const SearchBar: React.FC<SearchProps> = ({ onClick }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" name="search" placeholder="Search..." />

      <div>
        <small>No Results</small>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

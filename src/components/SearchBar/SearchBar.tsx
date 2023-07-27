import React from "react";
import { ChangeEvent } from "react";

type SearchProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const SearchBar: React.FC<SearchProps> = ({ onChange, onClick }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => onChange(e)}
      />

      <div>
        <small>No Results</small>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

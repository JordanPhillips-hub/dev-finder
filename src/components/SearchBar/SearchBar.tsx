import React from "react";
import { ChangeEvent } from "react";

type SearchProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  errMsg: string;
};

const SearchBar: React.FC<SearchProps> = ({ onChange, onClick, errMsg }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      {/* Search Icon Goes Here */}
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => onChange(e)}
      />

      <div>
        <small>{errMsg}</small>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

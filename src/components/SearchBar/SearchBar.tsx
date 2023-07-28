import React from "react";
import { ChangeEvent, FormEvent } from "react";

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errMsg: string;
}

const SearchBar: React.FC<SearchProps> = ({ onChange, onSubmit, errMsg }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search">Search</label>
      {/* Search Icon Goes Here */}
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={onChange}
      />

      <div>
        <small>{errMsg}</small>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;

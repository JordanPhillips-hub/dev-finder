import React, { ChangeEvent, FormEvent } from "react";
import { GoSearch } from "react-icons/go";

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errMsg: string;
}

const SearchBar: React.FC<SearchProps> = ({ onChange, onSubmit, errMsg }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search">Search</label>
      <GoSearch />
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

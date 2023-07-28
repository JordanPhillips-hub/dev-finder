import React, { ChangeEvent, FormEvent } from "react";
import { GoSearch } from "react-icons/go";

interface SearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errMsg: string;
}

const SearchBar: React.FC<SearchProps> = ({ onChange, onSubmit, errMsg }) => {
  return (
    <form onSubmit={onSubmit} className="relative mb-6">
      <label htmlFor="search" className="hidden">
        Search
      </label>
      <GoSearch className="absolute h-6 w-6 text-blue-500 inset-y-5 left-8" />
      <input
        id="search"
        type="text"
        name="search"
        onChange={onChange}
        placeholder="Search Github username..."
        className="w-full ps-20 pr-2.5 pb-2.5 pt-2.5 rounded-2xl text-lg shadow-lg text-opacity-20 h-16"
      />

      <div className="absolute right-4 inset-y-2">
        <small className="text-red-500 text-sm font-bold">{errMsg}</small>
        <button
          type="submit"
          className="text-base font-bold text-white bg-blue-500 rounded-lg py-3 px-6 ml-6"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

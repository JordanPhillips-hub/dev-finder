import React, { ChangeEvent, FormEvent, RefObject } from "react";
import { GoSearch } from "react-icons/go";
import { useWindowWidth } from "../hooks/useWindowWidth";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errMsg: string;
  inputRef: RefObject<HTMLInputElement>;
};

const SearchBar: React.FC<Props> = ({
  onChange,
  onSubmit,
  errMsg,
  inputRef,
}) => {
  const windowWidth = useWindowWidth();
  const renderErrMsg = () => {
    return <small className="text-red-500 text-xs font-bold">{errMsg}</small>;
  };

  return (
    <>
      <form onSubmit={onSubmit} className="relative mb-4 md:mb-6">
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <GoSearch className="text-electricBlue absolute h-6 w-6 inset-y-5 left-2 md:left-8" />
        <input
          ref={inputRef}
          id="search"
          type="text"
          name="search"
          onChange={onChange}
          placeholder="Search Github username..."
          className="placeholder:text-slateBlue placeholder:dark:text-white dark:bg-deepIndigo dark:text-white text-sm md:text-lg w-full h-16 pl-10 md:pl-20 rounded-2xl shadow-lg text-opacity-20 focus:outline-none"
        />

        <div className="absolute right-2 inset-y-3.5 md:inset-y-3">
          {windowWidth >= 768 && renderErrMsg()}
          <button
            type="submit"
            className="bg-electricBlue text-white font-bold text-sm md:text-base rounded-lg py-2 px-4 ml-1.5 hover:bg-electricBlueHover focus:bg-electricBlueHover outline-none"
          >
            Search
          </button>
        </div>
      </form>
      {windowWidth < 768 && renderErrMsg()}
    </>
  );
};

export default SearchBar;

import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

type Props = {
  onClick: () => void;
  theme: boolean;
};

const PageHeader: React.FC<Props> = ({ onClick, theme }) => {
  return (
    <header className="font-bold flex justify-between mb-9">
      <h1 className="text-midnightBlue dark:text-white text-2xl">devfinder</h1>
      <button
        onClick={onClick}
        className="text-slateBlue dark:text-white tracking-wider text-sm flex items-center gap-4"
      >
        {theme ? "LIGHT" : "DARK"}
        {theme ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </header>
  );
};

export default PageHeader;

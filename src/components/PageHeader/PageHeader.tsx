import React from "react";
import { BsMoonFill } from "react-icons/bs";

interface PageHeaderProps {
  onClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onClick }) => {
  return (
    <header className="font-bold flex justify-between mb-9">
      <h1 className="text-midnightBlue dark:text-white text-2xl">devfinder</h1>
      <button
        onClick={onClick}
        className="text-slateBlue dark:text-white tracking-wider text-sm flex items-center gap-4"
      >
        DARK
        <BsMoonFill />
      </button>
    </header>
  );
};

export default PageHeader;

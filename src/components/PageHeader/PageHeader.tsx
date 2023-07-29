import React from "react";
import { BsMoonFill } from "react-icons/bs";

interface PageHeaderProps {
  onClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onClick }) => {
  return (
    <header className="font-bold flex justify-between mb-8">
      <h1 className="text-midnightBlue dark:text-white text-2.2xl">
        devfinder
      </h1>
      <button
        onClick={onClick}
        className="text-slateBlue dark:text-white flex items-center gap-4 text-sm tracking-wider "
      >
        Dark
        <BsMoonFill className="w-5 h-5" />
      </button>
    </header>
  );
};

export default PageHeader;

import React from "react";
import { BsMoonFill } from "react-icons/bs";

const PageHeader: React.FC = () => {
  return (
    <header className="font-bold flex justify-between mb-8">
      <h1 className="text-midnightBlue text-2.2xl">devfinder</h1>
      <button className="text-slateBlue flex items-center gap-4">
        <span className=" text-sm tracking-wider">Dark</span>
        <BsMoonFill className="w-5 h-5" />
      </button>
    </header>
  );
};

export default PageHeader;

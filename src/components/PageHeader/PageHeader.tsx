import React from "react";
import { BsMoonFill } from "react-icons/bs";

const PageHeader: React.FC = () => {
  return (
    <header className="flex justify-between font-bold mb-8">
      <h1 className="text-slate-800 text-2.2xl">devfinder</h1>
      <div className="text-slate-500 flex items-center gap-4">
        <span className=" text-sm tracking-wider">Dark</span>
        <BsMoonFill className="w-5 h-5" />
      </div>
    </header>
  );
};

export default PageHeader;

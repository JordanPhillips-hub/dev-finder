import React from "react";
import { BsMoonFill } from "react-icons/bs";

const PageHeader: React.FC = () => {
  return (
    <header className="flex justify-between text-slate-900 font-bold">
      <h1 className="text-2.2xl">devfinder</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm tracking-wider">Dark</span>
        <BsMoonFill className="w-5 h-5" />
      </div>
    </header>
  );
};

export default PageHeader;

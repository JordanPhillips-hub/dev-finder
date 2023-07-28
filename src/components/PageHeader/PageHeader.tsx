import React from "react";
import { BsMoonFill } from "react-icons/bs";

const PageHeader: React.FC = () => {
  return (
    <header>
      <h1>devfinder</h1>
      <div>
        <span>Dark</span>
        <BsMoonFill />
      </div>
    </header>
  );
};

export default PageHeader;

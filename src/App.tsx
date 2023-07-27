import { ChangeEvent, useState } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchInput, setSearchInput] = useState<string | null>("");

  const handleSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(value);
  };

  return (
    <>
      <PageHeader />
      <SearchBar onChange={handleSearch} />
    </>
  );
}

export default App;

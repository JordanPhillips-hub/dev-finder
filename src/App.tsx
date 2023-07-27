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

  async function getUser() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${searchInput}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <PageHeader />
      <SearchBar onChange={handleSearch} onClick={getUser} />
    </>
  );
}

export default App;

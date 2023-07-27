import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const handleSearch = () => {};

  return (
    <>
      <PageHeader />
      <SearchBar onClick={handleSearch} />
    </>
  );
}

export default App;

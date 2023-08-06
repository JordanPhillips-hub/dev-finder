import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard, { UserCardProps } from "./components/UserCard/UserCard";

function App() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [user, setUser] = useState<null | UserCardProps>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [theme, setTheme] = useState<boolean>(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    setIsInputFocused(true);
  }, []);

  useEffect(() => {
    if (isInputFocused && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isInputFocused, theme, user, errMsg]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  const handleTheme = useCallback(() => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.theme = newTheme ? "dark" : "light";
  }, [theme]);

  const handleSearch = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(value);
    },
    []
  );

  const getUserData = async (searchInput: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${searchInput}`
      );
      setUser(data as UserCardProps);
      setErrMsg("");
    } catch (err) {
      setErrMsg("No results");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await getUserData(searchInput);
    },
    [searchInput]
  );

  return (
    <div className=" bg-lightestBlue dark:bg-navy font-mono h-screen grid place-items-center">
      <div className="max-w-[730px] min-w-[327px] md:min-w-[573px] lg:min-w-[730px]">
        <PageHeader onClick={handleTheme} theme={theme} />
        {isLoading && <div className="dark:text-white">Loading...</div>}
        <SearchBar
          inputRef={searchInputRef}
          onChange={handleSearch}
          onSubmit={handleSubmit}
          errMsg={errMsg}
        />
        {user ? <UserCard {...user} /> : null}
      </div>
    </div>
  );
}

export default App;

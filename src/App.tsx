import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard, { UserCardProps } from "./components/UserCard/UserCard";

function App() {
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
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.theme = newTheme ? "dark" : "light";
  };

  const handleSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(value);
  };

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getUserData(searchInput);
  };

  return (
    <div className=" bg-lightestBlue dark:bg-navy font-mono h-screen grid place-items-center">
      <div className="max-w-[730px] min-w-[327px] md:min-w-[573px] lg:min-w-[730px]">
        <PageHeader onClick={handleTheme} />
        <SearchBar
          onChange={handleSearch}
          onSubmit={handleSubmit}
          errMsg={errMsg}
        />
        {isLoading && <div>Loading...</div>}
        {user ? (
          <UserCard
            avatar_url={user.avatar_url}
            name={user.name}
            created_at={user.created_at}
            login={user.login}
            bio={user.bio}
            public_repos={user.public_repos}
            followers={user.followers}
            following={user.following}
            location={user.location}
            twitter_username={user.twitter_username}
            blog={user.blog}
            company={user.company}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;

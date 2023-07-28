import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard, { UserCardProps } from "./components/UserCard/UserCard";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [user, setUser] = useState<null | UserCardProps>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const handleSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${searchInput}`
      );
      setUser(data as UserCardProps);
      setErrMsg("");
      setIsLoading(false);
      console.log(user);
    } catch (err) {
      setErrMsg("User Not Found");
      setIsLoading(false);
      setUser(null);
    }
  };

  return (
    <div className="bg-lightestBlue font-mono h-screen">
      {isLoading && <div>Loading...</div>}
      <PageHeader />
      <SearchBar
        onChange={handleSearch}
        onSubmit={handleSubmit}
        errMsg={errMsg}
      />
      {user !== null ? (
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
      ) : (
        <div>Cannot find user</div>
      )}
    </div>
  );
}

export default App;

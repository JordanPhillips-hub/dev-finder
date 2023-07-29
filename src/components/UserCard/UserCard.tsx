import React from "react";
import MainInfo from "./MainInfo/MainInfo";
import Stats from "./Stats/Stats";
import Contact from "./Contact/Contact";

export interface UserCardProps {
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
}

const UserCard: React.FC<UserCardProps> = ({
  avatar_url,
  name,
  created_at,
  login,
  bio,
  public_repos,
  followers,
  following,
  location,
  twitter_username,
  blog,
  company,
}) => {
  return (
    <main className="bg-white flex gap-9 rounded-2xl shadow-lg text-opacity-20 p-12">
      <img
        src={avatar_url}
        alt="user profile"
        className="h-[117px] rounded-full"
      />
      <div className="flex-1">
        <MainInfo
          avatar_url={avatar_url}
          name={name}
          created_at={created_at}
          login={login}
          bio={bio}
        />
        <Stats
          public_repos={public_repos}
          followers={followers}
          following={following}
        />
        <Contact
          location={location}
          twitter_username={twitter_username}
          blog={blog}
          company={company}
        />
      </div>
    </main>
  );
};

export default UserCard;

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
    <main>
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
    </main>
  );
};

export default UserCard;

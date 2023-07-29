import React from "react";
import moment from "moment";
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
    <main className="bg-white dark:bg-deepIndigo pt-8 pb-12 px-6 rounded-2xl shadow-lg text-opacity-20">
      <div className="flex items-center gap-5 mb-8">
        <img
          src={avatar_url}
          alt="user profile"
          className="w-[22.6%] h-[22.6%] rounded-full"
        />

        <div>
          <header>
            <h2 className="text-midnightBlue dark:text-white font-bold text-base">
              {name ?? "No User Name"}
            </h2>
          </header>
          <p className="text-electricBlue text-sm">
            {login ?? "No User Login"}
          </p>

          <p className="text-slateBlue dark:text-white text-sm">
            {`Joined ${moment(created_at).format("ll")}`}
          </p>
        </div>
      </div>

      <p className="text-slateBlue dark:text-white mb-6">
        {bio ?? "This profile has no bio"}
      </p>

      <div>
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

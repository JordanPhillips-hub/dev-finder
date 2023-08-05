import React from "react";
import moment from "moment";
import Stats from "./Stats/Stats";
import Contact from "./Contact/Contact";
import { useWindowWidth } from "../hooks/useWindowWidth";

export type UserCardProps = {
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
};

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
  const windowWidth = useWindowWidth();
  const renderUserBio = () => {
    return (
      <p className="text-slateBlue dark:text-white text-sm md:text-base">
        {bio ?? "This profile has no bio"}
      </p>
    );
  };

  return (
    <main className="bg-white dark:bg-deepIndigo w-[327px] md:w-[573px] lg:w-[730px] pt-8 pb-12 px-6 md:px-10 lg:px-12 rounded-2xl shadow-lg text-opacity-20">
      <div className="flex items-center gap-5 mb-8">
        <img
          src={avatar_url}
          alt="user profile"
          className="w-[22.6%] h-[22.6%] max-w-[117px] rounded-full"
        />

        <div className="w-full">
          <div className="lg:flex lg:items-center lg:justify-between">
            <header>
              <h2 className="text-midnightBlue dark:text-white font-bold text-base md:text-2xl">
                {name ?? "No User Name"}
              </h2>
            </header>

            <p className="text-slateBlue dark:text-white text-sm md:text-base">
              {`Joined ${moment(created_at).format("ll")}`}
            </p>
          </div>

          <p className="text-electricBlue text-sm md:text-base lg:mb-5">
            {login ?? "No User Login"}
          </p>

          {windowWidth >= 1280 && renderUserBio()}
        </div>
      </div>

      {windowWidth < 1280 && renderUserBio()}

      <div className="lg:relative lg:left-[129px]">
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

import React from "react";

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
      <img src={avatar_url} alt="user profile" />
      <section>
        <div>
          <header>
            <h2>{name}</h2>
          </header>
          <small>{created_at}</small>
        </div>
        <small>{login}</small>
        <p>{bio ?? "No User Bio"}</p>
      </section>

      <section>
        <div>
          <small>Repos</small>
          <p>{public_repos}</p>
        </div>
        <div>
          <small>Followers</small>
          <p>{followers}</p>
        </div>
        <div>
          <small>Following</small>
          <p>{following}</p>
        </div>
      </section>

      <section>
        <div>
          <div>
            {/* icon */}
            <small>{location ?? "Location Unavailable"}</small>
          </div>
          <div>
            {/* icon */}
            <small>{twitter_username ?? "Twitter Unavailable"}</small>
          </div>
        </div>

        <div>
          <div>
            {/* icon */}
            <small>{blog ?? "Blog Unavailable"}</small>
          </div>
          <div>
            {/* icon */}
            <small>{company ?? "Company Unavailable"}</small>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserCard;

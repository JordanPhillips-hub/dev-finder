import React from "react";

interface MainInfoProps {
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string;
}

const MainInfo: React.FC<MainInfoProps> = ({
  avatar_url,
  name,
  created_at,
  login,
  bio,
}) => {
  return (
    <section>
      <img src={avatar_url} alt="user profile" />
      <div>
        <header>
          <h2>{name}</h2>
        </header>
        <small>{created_at}</small>
      </div>
      <small>{login ?? "No User Login"}</small>
      <p>{bio ?? "No User Bio"}</p>
    </section>
  );
};

export default MainInfo;

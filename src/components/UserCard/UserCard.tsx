import React from "react";

export interface UserCardProps {
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string;
}

const UserCard: React.FC<UserCardProps> = ({
  avatar_url,
  name,
  created_at,
  login,
  bio,
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
        <p>{bio}</p>
      </section>

      <section></section>
    </main>
  );
};

export default UserCard;

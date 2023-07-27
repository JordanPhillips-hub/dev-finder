import React from "react";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  createdAt: string;
  login: string;
  bio: string;
};

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  name,
  createdAt,
  login,
  bio,
}) => {
  return (
    <main>
      <img src={avatarUrl} alt="user profile" />
      <section>
        <div>
          <header>
            <h2>{name}</h2>
          </header>
          <small>{createdAt}</small>
        </div>
        <small>{login}</small>
        <p>{bio}</p>
      </section>

      <section></section>
    </main>
  );
};

export default UserCard;

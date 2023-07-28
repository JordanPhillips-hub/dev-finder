import React from "react";

interface StatsProps {
  public_repos: number;
  followers: number;
  following: number;
}

const Stats: React.FC<StatsProps> = ({
  public_repos,
  followers,
  following,
}) => {
  return (
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
  );
};

export default Stats;

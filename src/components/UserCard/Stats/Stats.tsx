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
  const stats = [
    { text: "Repos", number: public_repos },
    { text: "Followers", number: followers },
    { text: "Following", number: following },
  ];

  return (
    <section>
      {stats.map((stat, index) => (
        <div key={index}>
          <small>{stat.text}</small>
          <p>{stat.number}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

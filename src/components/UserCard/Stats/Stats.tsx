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
    <section className="bg-lightestBlue flex justify-around rounded-lg py-4 mb-2.5">
      {stats.map((stat, index) => (
        <div key={index}>
          <small className="text-steelBlue text-sm">{stat.text}</small>
          <p className="font-bold text-xl text-midnightBlue">{stat.number}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

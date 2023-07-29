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
    <section className="bg-lightestBlue dark:bg-navy flex justify-between py-5 px-3.5 mb-6 rounded-lg">
      {stats.map((stat, index) => (
        <div key={index}>
          <small className="text-steelBlue dark:text-white text-xs">
            {stat.text}
          </small>
          <p className="text-midnightBlue dark:text-white text-base font-bold">
            {stat.number}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

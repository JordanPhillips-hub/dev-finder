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
    <section className="bg-lightestBlue dark:bg-navy  flex justify-around rounded-lg py-4 mb-2.5">
      {stats.map((stat, index) => (
        <div key={index}>
          <small className="text-steelBlue dark:text-white text-sm">
            {stat.text}
          </small>
          <p className="text-midnightBlue dark:text-white font-bold text-xl ">
            {stat.number}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

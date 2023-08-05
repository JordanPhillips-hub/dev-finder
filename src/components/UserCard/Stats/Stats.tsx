import React from "react";
type Props = {
  public_repos: number;
  followers: number;
  following: number;
};

const Stats: React.FC<Props> = ({ public_repos, followers, following }) => {
  const stats = [
    { text: "Repos", number: public_repos },
    { text: "Followers", number: followers },
    { text: "Following", number: following },
  ];

  return (
    <section className="bg-lightestBlue dark:bg-navy text-center md:text-left flex justify-around md:justify-normal md:gap-24 lg:w-[518px] py-5 pl-3.5 md:pl-8 mb-6 rounded-lg">
      {stats.map((stat, index) => (
        <div key={index}>
          <small className="text-steelBlue dark:text-white text-xs md:text-sm">
            {stat.text}
          </small>
          <p className="text-midnightBlue dark:text-white text-base md:text-xl font-bold">
            {stat.number}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

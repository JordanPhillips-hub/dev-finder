import React from "react";
import moment from "moment";
interface MainInfoProps {
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string;
}

const MainInfo: React.FC<MainInfoProps> = ({
  name,
  created_at,
  login,
  bio,
}) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <header>
          <h2 className="text-midnightBlue dark:text-white text-2xl font-bold">
            {name ?? "No User Name"}
          </h2>
        </header>
        <p className="text-slateBlue dark:text-white">
          {`Joined ${moment(created_at).format("ll")}`}
        </p>
      </div>
      <p className="text-electricBlue">{login ?? "No User Login"}</p>
      <p className="text-slateBlue dark:text-white mt-5 mb-8">
        {bio ?? "This profile has no bio"}
      </p>
    </section>
  );
};

export default MainInfo;

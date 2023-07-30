import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";

interface ContactItem {
  text: string;
  icon: React.ReactElement;
  na: string;
}
interface ContactProps {
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
}

const Contact: React.FC<ContactProps> = ({
  location,
  twitter_username,
  blog,
  company,
}) => {
  const contacts: ContactItem[][] = [
    [
      { text: location, icon: <FaMapMarkerAlt />, na: "Not Available" },
      { text: blog, icon: <FiLink />, na: "Not Available" },
    ],
    [
      {
        text: twitter_username,
        icon: <AiOutlineTwitter />,
        na: "Not Available",
      },
      { text: company, icon: <BsBuildingsFill />, na: "Not Available" },
    ],
  ];

  const RenderContactItem: React.FC<ContactItem> = ({ text, icon, na }) => {
    return (
      <div className="text-midnightBlue dark:text-white flex items-center gap-5 mb-4">
        <span>{icon}</span>
        {text === blog ? (
          <Link
            to={text}
            target="_blank"
            className="text-sm md:text-base hover:text-electricBlue"
          >
            {text ?? na}
          </Link>
        ) : (
          <p className="text-sm md:text-base">{text ?? na}</p>
        )}
      </div>
    );
  };

  return (
    <section className="text-steelBlue md:flex md:gap-16 break-all">
      <div className="max-w-[230px]">
        {contacts[0].map((contact, index) => (
          <RenderContactItem key={index} {...contact} />
        ))}
      </div>

      <div>
        {contacts[1].map((contact, index) => (
          <RenderContactItem key={index} {...contact}></RenderContactItem>
        ))}
      </div>
    </section>
  );
};

export default Contact;

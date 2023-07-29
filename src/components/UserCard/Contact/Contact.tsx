import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";

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
  const contacts = [
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

  return (
    <section className="text-steelBlue flex gap-14 ">
      <div className="flex-1">
        {contacts[0].map((contact, index) => (
          <div
            key={index}
            className="text-midnightBlue dark:text-white flex gap-2.5 items-center mt-5"
          >
            <span className="w-4 ">{contact.icon}</span>
            <p>{contact.text ?? contact.na}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 ">
        {contacts[1].map((contact, index) => (
          <div
            key={index}
            className="text-midnightBlue dark:text-white flex gap-2.5 items-center mt-5"
          >
            <span className="w-4">{contact.icon}</span>
            <p>{contact.text ?? contact.na}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

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
    <section className="text-steelBlue">
      <div>
        {contacts[0].map((contact, index) => (
          <div
            key={index}
            className="text-midnightBlue dark:text-white flex items-center gap-5 mb-4"
          >
            <span>{contact.icon}</span>
            <p className="text-sm">{contact.text ?? contact.na}</p>
          </div>
        ))}
      </div>

      <div>
        {contacts[1].map((contact, index) => (
          <div
            key={index}
            className="text-midnightBlue dark:text-white flex items-center gap-5 mb-4"
          >
            <span>{contact.icon}</span>
            <p className="text-sm">{contact.text ?? contact.na}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

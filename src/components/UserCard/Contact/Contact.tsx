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
      { text: location, icon: <FaMapMarkerAlt />, na: "Location Unavailable" },
      {
        text: twitter_username,
        icon: <AiOutlineTwitter />,
        na: "Twitter Unavailable",
      },
    ],
    [
      { text: blog, icon: <FiLink />, na: "Blog Unavailable" },
      { text: company, icon: <BsBuildingsFill />, na: "Company Unavailable" },
    ],
  ];

  return (
    <section>
      <div>
        {contacts[0].map((contact, index) => (
          <div key={index}>
            {contact.icon}
            <small>{contact.text ?? contact.na}</small>
          </div>
        ))}
      </div>

      <div>
        {contacts[1].map((contact, index) => (
          <div key={index}>
            {contact.icon}
            <small>{contact.text ?? contact.na}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

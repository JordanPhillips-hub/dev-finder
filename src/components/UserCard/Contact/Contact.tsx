import React from "react";

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
      { text: location, na: "Location Unavailable" },
      { text: twitter_username, na: "Twitter Unavailable" },
    ],
    [
      { text: blog, na: "Blog Unavailable" },
      { text: company, na: "Company Unavailable" },
    ],
  ];

  return (
    <section>
      <div>
        {contacts[0].map((contact, index) => (
          <div key={index}>
            {/* icon */}
            <small>{contact.text ?? contact.na}</small>
          </div>
        ))}
      </div>

      <div>
        {contacts[1].map((contact, index) => (
          <div key={index}>
            {/* icon */}
            <small>{contact.text ?? contact.na}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

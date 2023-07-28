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
  return (
    <section>
      <div>
        <div>
          {/* icon */}
          <small>{location ?? "Location Unavailable"}</small>
        </div>
        <div>
          {/* icon */}
          <small>{twitter_username ?? "Twitter Unavailable"}</small>
        </div>
      </div>

      <div>
        <div>
          {/* icon */}
          <small>{blog ?? "Blog Unavailable"}</small>
        </div>
        <div>
          {/* icon */}
          <small>{company ?? "Company Unavailable"}</small>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

// Reusable Blog Post Card Component
const EventPostCard = ({ title, date, excerpt, images = [], link = "#" }) => {
  return (
    <div className="post">
      {/* Image Section */}
      <div className="post-img">
        <img
          className="img-responsive"
          src={images[0] || "src/assets/images/events/post-01.jpg"}
          alt={title}
        />
      </div>

      {/* Info Section */}
      <div className="post-info">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <h6>{date}</h6>
        <p>{excerpt}</p>
        <a className="readmore dark-color" href={link}>
          <span>Read More</span>
        </a>
      </div>
    </div>
  );
};

export default EventPostCard;

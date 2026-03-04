import React from "react";

const PlantationGalleryItem = ({ src, alt, title, dataGroups, contacts = [] }) => {
  return (
    <li
      className="portfolio-item gutter-space"
      data-groups={JSON.stringify(dataGroups)}
    >
      <div className="portfolio">
        <div className="dark-overlay" />
        <img src={src} alt={alt} />
        <div className="portfolio-wrap">
          <div className="portfolio-description">
            <h3 className="portfolio-title">{title}</h3>
            
          </div>
          {/* /.project-info */}
          <ul className="portfolio-details">
            <li>
              <a className="alpha-lightbox" href={src}>
                {contacts.length > 0 && (
              <div>
                {contacts.map((contact, index) => (
                  <p key={index} className="white-color mb-0">
                    {contact.name} : {contact.phone}
                  </p>
                ))}
              </div>
            )}
                <i className="fa fa-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default PlantationGalleryItem;

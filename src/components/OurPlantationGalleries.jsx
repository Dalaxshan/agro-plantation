import React from "react";
import PlantationGalleryItem from "./PlantationGalleryItem"; // Adjust path if needed

const OurPlantationGalleries = () => {
  const galleryImages = [
    {
      src: "/images/portfolio/grid/1.jpg",
      alt: "Palapathwala Estate",
      title: "Palapathwala",
      groups: ["all", "palapathwala"],
    },
    {
      src: "/images/portfolio/grid/2.jpg",
      alt: "Matale Estate",
      title: "Matale Estate",
      groups: ["all", "matale"],
    },
    {
      src: "/images/portfolio/grid/3.jpg",
      alt: "Laggala Estate",
      title: "Laggala Estate",
      groups: ["all", "laggala"],
    },
    {
      src: "/images/portfolio/grid/4.jpg",
      alt: "Salagama Plantation",
      title: "Salagama",
      groups: ["all", "salagama"],
    },
    {
      src: "/images/portfolio/grid/5.jpg",
      alt: "Gampola Estate",
      title: "Gampola Estate",
      groups: ["all", "gampola"],
    },
    {
      src: "/images/portfolio/grid/6.jpg",
      alt: "Gawatamuna Plantation",
      title: "Gawatamuna",
      groups: ["all", "gawatamuna"],
    },
  ];

  return (
    <section className="pt-0 pb-60 white-bg">
      <div className="container">
        <div className="text-center mb-50">
          <h4 className="text-uppercase">Agro Ventures</h4>
          <h1 className="dark-green-color">
            <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
            Our plantations gallries
          </h1>
        </div>

        <div className="portfolio-container text-center">
          {/* Filter Buttons */}
          <ul
            id="portfolio-filter"
            className="list-inline mb-40 filter-transparent"
          >
            <li className="active" data-group="all">
              All
            </li>
            <li data-group="palapathwala">Palapathwala</li>
            <li data-group="matale">Matale Estate</li>
            <li data-group="laggala">Laggala Estate</li>
            <li data-group="salagama">Salagama</li>
            <li data-group="gampola">Gampola Estate</li>
            <li data-group="gawatamuna">Gawatamuna</li>
            <li data-group="puttalam">Puttalam Estate</li>
            <li data-group="dolosbage">Dolosbage</li>
          </ul>

          {/* Reusable Grid */}
          <ul id="portfolio-grid" className="three-column hover-two">
            {galleryImages.map((image, index) => (
              <PlantationGalleryItem
                key={index}
                src={image.src}
                alt={image.alt}
                title={image.title}
                dataGroups={image.groups}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPlantationGalleries;

import React from "react";
import PlantationGalleryItem from "./PlantationGalleryItem"; // Adjust path if needed

const OurPlantationGalleries = () => {
  const galleryImages = [
    {
      src: "/images/plantation/p1.webp",
      alt: "Udasgiriya Estate",
      title: "Udasgiriya Estate",
      contacts: [
        { name: "Kumarasinghe", phone: "076 855 4859" },
    
      ],
      groups: ["all", "udasgiriya"],
    },
    {
      src: "/images/plantation/p2.webp",
      alt: "Kawatayamuna Estate",
      title: "Kawatayamuna Estate",
      contacts: [
        { name: "Thisara Rovindra", phone: "076 306 6624" },
        { name: "Anupama", phone: "071 094 8653" },
      ],
      groups: ["all", "kawatayamuna"],
    },
    {
      src: "/images/plantation/p3.webp",
      alt: "Dombawela Estate",
      title: "Dombawela Estate",
      contacts: [
        { name: "Pasindu", phone: "077 136 7831" },
       
      ],
      groups: ["all", "dombawela"],
    },
    {
      src: "/images/plantation/p4.webp",
      alt: "Pathingaskotuwa Estate",
      title: "Pathingaskotuwa Estate",
      contacts: [
        { name: "Thilakasiri", phone: "076 389 1783" },
       
      ],
      groups: ["all", "pathingaskotuwa"],
    },
    {
      src: "/images/plantation/p5.webp",
      alt: "Selagama Estate",
      title: "Selagama Estate",
      contacts: [
        { name: "Sanjeewa", phone: "070 424 4224" },
      
      ],
      groups: ["all", "selagama"],
    },
 {
      src: "/images/plantation/p6.webp",
      alt: "Rusigama Estate",
      title: "Rusigama Estate",
      contacts: [
        { name: "Chaminda", phone: "074 117 4383" },
        { name: "Avishka", phone: "077 451 4074" },
      ],
      groups: ["all", "rusigama"],
    },
    {
      src: "/images/plantation/p7.webp",
      alt: "Medalanda Estate",
      title: "Medalanda Estate",
      contacts: [
        { name: "Chathura", phone: "076 153 8453" },

      ],
      groups: ["all", "medalanda"],
    },
    {
      src: "/images/plantation/p8.webp",
      alt: "Kanupelella Estate",
      title: "Kanupelella Estate",
      contacts: [
        { name: "Tharindu", phone: "076 033 3028" },
        { name: "Shehan", phone: "075 793 1284" },
      ],
      groups: ["all", "kanupelella"],
    },
    {
      src: "/images/plantation/p9.webp",
      alt: "Nawaland Estate",
      title: "Nawaland Estate",
      contacts: [
        { name: "Shahuka", phone: "076 847 5668" },
        { name: "Layanal", phone: "076 636 4565" },
      ],
      groups: ["all", "nawaland"],
    },
    {
      src: "/images/plantation/p10.webp",
      alt: "Udugama Estate",
      title: "Udugama Estate",
      contacts: [
        { name: "Laksha", phone: "078 827 0735" },
        { name: "Chamara", phone: "075 944 4725" },
      ],
      groups: ["all", "udugama"],
    },
    {
      src: "/images/plantation/p11.webp",
      alt: "Kosgolla Estate",
      title: "Kosgolla Estate",
      contacts: [
        { name: "Aroshanan", phone: "071 766 0847" },
        { name: "Sunil", phone: "077 979 8834" },
      ],
      groups: ["all", "kosgolla"],
    },
    {
      src: "/images/plantation/p12.webp",
      alt: "Grasmere Estate",
      title: "Grasmere Estate",
      contacts: [
        { name: "Nalin", phone: "071 915 8622" },
        { name: "Matheesha", phone: "074 207 0625" },
      ],
      groups: ["all", "grasmere"],
    },
    {
      src: "/images/plantation/p13.webp",
      alt: "Welangahawatta Estate",
      title: "Welangahawatta Estate",
      contacts: [
        { name: "Kelum", phone: "075 368 8800" },
      
      ],
      groups: ["all", "welangahawatta"],
    },
    {
      src: "/images/plantation/p14.webp",
      alt: "Kothmale Estate",
      title: "Kothmale Estate",
      contacts: [
        { name: "Wikramarachchi", phone: "077 843 0012" },
     
      ],
      groups: ["all", "kothmale"],
    },
    {
      src: "/images/plantation/p15.webp",
      alt: "Udasgiriya Estate",
      title: "Udasgiriya Estate",
      contacts: [
        { name: "Kumarasinghe", phone: "076 855 4859" },
      ],
      groups: ["all", "udasgiriya"],
    },
    {
      src: "/images/plantation/p16.webp",
      alt: "Kawatayamuna Estate",
      title: "Kawatayamuna Estate",
      contacts: [
        { name: "Thisara", phone: "0761234567" },
        { name: "Anupama", phone: "0712333223" },
      ],
      groups: ["all", "kawatayamuna"],
    },
    {
      src: "/images/plantation/p17.webp",
      alt: "Dombawela Estate",
      title: "Dombawela Estate",
      contacts: [
         { name: "Pasindu", phone: "077 136 7831" },
      ],
      groups: ["all", "dombawela"],
    },
    {
      src: "/images/plantation/p18.webp",
      alt: "Pathingaskotuwa Estate",
      title: "Pathingaskotuwa Estate",
      contacts: [
          { name: "Thilakasiri", phone: "076 389 1783" },
      ],
      groups: ["all", "pathingaskotuwa"],
    },
    {
      src: "/images/plantation/p19.webp",
      alt: "Selagama Estate",
      title: "Selagama Estate",
      contacts: [
         { name: "Sanjeewa", phone: "070 424 4224" },
      ],
      groups: ["all", "selagama"],
    },
    {
      src: "/images/plantation/p20.webp",
      alt: "Rusigama Estate",
      title: "Rusigama Estate",
      contacts: [
         { name: "Chaminda", phone: "074 117 4383" },
        { name: "Avishka", phone: "077 451 4074" },
      ],
      groups: ["all", "rusigama"],
    },
    {
      src: "/images/plantation/p21.webp",
      alt: "Medalanda Estate",
      title: "Medalanda Estate",
      contacts: [
        { name: "Chathura", phone: "076 153 8453" },
      ],
      groups: ["all", "medalanda"],
    },
  ];

  return (
    <section className="pt-50 pb-50 white-bg">
      <div className="container">
        <div className="text-center mb-50">
          <h4 className="text-uppercase">Agro Ventures</h4>
          <h1 className="dark-green-color">
            <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
            Our plantations galleries
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
            <li data-group="udasgiriya">Udasgiriya</li>
            <li data-group="kawatayamuna">Kawatayamuna Estate</li>
            <li data-group="dombawela">Dombawela Estate</li>
            <li data-group="pathingaskotuwa">Pathingaskotuwa</li>
            <li data-group="selagama">Selagama Estate</li>
            <li data-group="rusigama">Rusigama</li>
            <li data-group="medalanda">Medalanda Estate</li>
            <li data-group="kanupelella">Kanupelella</li>
            <li data-group="nawaland">Nawaland</li>
            <li data-group="udugama">Udugama</li>
            <li data-group="kosgolla">Kosgolla</li>
            <li data-group="grasmere">Grasmere  Estate</li>
            <li data-group="welangahawatta">Welangahawatta</li>
             <li data-group="kothmale">Kothmale</li>
          </ul>

          {/* Reusable Grid */}
          <ul id="portfolio-grid" className="three-column hover-two">
            {galleryImages.map((image, index) => (
              <PlantationGalleryItem
                key={index}
                src={image.src}
                alt={image.alt}
                title={image.title}
                contacts={image.contacts}
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
 OurPlantationGalleries;

import React, { useState } from "react";

const OurPlantationWhoWeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="white-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-0 pb-60">
            <h4 className="text-uppercase">Agro ventures</h4>
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Our plantations
            </h1>
            <p className="mt-30">
              At Agroventures Plantations (Pvt) Ltd, our lands represent more
              than just fields and orchards; they embody our unwavering
              commitment to sustainability, responsible farming practices, and
              community development. Nestled in the picturesque landscapes of
              Sri Lanka, our plantations serve as a sanctuary of abundant
              biodiversity, where premium crops are cultivated with dedication
              and care.
            </p>
            {isExpanded && (
              <>
                <p className="mt-20">
                  Our approach to farming is deeply rooted in the principles of
                  environmental stewardship. We employ advanced agricultural
                  techniques that minimize our ecological footprint, ensuring
                  that our farming practices are sustainable and eco-friendly.
                  By integrating crop rotation, organic fertilizers, and water
                  conservation methods, we maintain the health of our soil and
                  preserve the natural resources that our communities depend on.
                </p>

                <p className="mt-20">
                  In addition to our environmental efforts, we prioritize the
                  well-being of the communities surrounding our plantations. We
                  actively engage in community development projects, providing
                  educational opportunities, healthcare initiatives, and
                  infrastructure improvements. Our goal is to foster a
                  harmonious relationship between our business and the local
                  population, creating a positive impact that extends beyond our
                  fields.
                </p>

                <p className="mt-20">
                  Our dedication to responsible farming is reflected in the
                  quality of our produce. Each crop is carefully nurtured from
                  seed to harvest, ensuring that only the finest products reach
                  our consumers. We take pride in our ability to deliver fresh,
                  nutritious, and sustainably grown crops that contribute to the
                  well-being of our customers and the environment.
                </p>
                <p className="mt-20">
                  At Agroventures Plantations, we are not just growing crops; we
                  are cultivating a legacy of sustainability, community support,
                  and agricultural excellence. Our lands are a testament to our
                  vision of a greener, more prosperous future for Sri Lanka and
                  beyond.
                </p>
              </>
            )}
            <p className="text-left mt-30">
              <button
                className="btn btn-color btn-default"
                onClick={toggleExpand}
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-responsive"
              src="/src/assets/images/our-plantations.png"
                          alt="our-plantations-img"
                         style={{
    width: "100%",
    height: "auto",
    maxHeight: "400px",  
    objectFit: "contain",  
    borderRadius: "8px", 
  }}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default OurPlantationWhoWeSection;

const OurMainSection = () => {
  return (
    <>
      {/* Our Main produce start */}
      <section className="grey-bg" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h1 className="dark-green-color">
                <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
                Our main produce
              </h1>
              <h2 className="mt-10 oswald-font font-100">Vanilla</h2>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-md-6 text-center mb-20">
              <h2 className="great-font dark-green-color capitalize font-italic font-300">
                Vanilla Planifolia
              </h2>
              <p className="oswald-font mt-20">
                Vanilla planifolia is a species of vanilla orchid known to
                prefer tropical nations. It is one of the most widely demanded
                spices in the world, valued at more than silver itself. It is
                most commonly known for Vanilla flavouring and it is harvested
                for the vanilla bean.
              </p>
              <p className="oswald-font mt-20">
                At Agro Ventures Plantations we have set up many Vanilla
                Plantations in the most optimal regions in Sri Lanka in order to
                ensure that we can get the best and most high quality Beans for
                export. Our goal is to make Sri Lanka the number one Vanilla
                Exporter while providing the best returns to our customers.
              </p>
              <p className="mt-30">
                <a href="#" className="btn btn-color btn-circle">
                  Learn More
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 mb-20 col-sm-6">
                  <img
                    className="img-responsive"
                    src="src/assets/images/vanila-1.png"
                    alt="vanila-img"
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <img
                    className="img-responsive"
                    src="src/assets/images/food-img-01.jpg"
                    alt="vanila-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our main produce End */}
    </>
  );
};
export default OurMainSection;

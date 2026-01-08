const OurCultivationAccordianSection = () => {
  return (
    <section className="main-section white-bg first-ico-box">
      <div className="container">
        <div className="row text-center">
          <h1 className="dark-green-color ">
            <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
            How to Get Started
          </h1>
          <h2 className="mt-10 oswald-font font-100">Start the steps</h2>
        </div>
        <div className="row mt-40">
          <div className="col-md-3 feature-box text-center">
            <i className="fa fa-comments font-40px dark-green-color" />
            <h4>Step 1</h4>
            <p>Contact us to discuss your preferred plan.</p>
          </div>

          <div className="col-md-3 feature-box text-center">
            <i className="fa fa-map-marker font-40px dark-green-color" />
            <h4>Step 2</h4>
            <p>Purchase the land through the Land Registry of Matale.</p>
          </div>

          <div className="col-md-3 feature-box text-center">
            <i className="fa fa-file-signature font-40px dark-green-color" />
            <h4>Step 3</h4>
            <p>
              Sign a registered lease agreement with Agroventures Plantations
              Private Ltd.
            </p>
          </div>

          <div className="col-md-3 feature-box text-center">
            <i className="fa fa-seedling font-40px dark-green-color" />
            <h4>Step 4</h4>
            <p>
              Sit back and watch your land be developed and cultivated by our
              expert team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCultivationAccordianSection;

const WhyChooseSection = () => {
  return (
    <>
      {/* Why Choose Us Start */}
      <section className="main-section grey-bg pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h1 className="dark-green-color">
                <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
                WHY
              </h1>
              <h2 className="mt-10 oswald-font font-100">choose Us ?</h2>
            </div>
            <div className="col-md-3 feature-box text-center col-sm-6">
              <i className="fas fa-user-tie font-30px light-icon agro-green-bg-icon circle-icon fade-icon" />
              <h5>Expert Management</h5>
              <p>
                Our experienced team handles every aspect of cultivation, from
                soil preparation to export, ensuring high-quality vanilla
                production.
              </p>
            </div>
            <div className="col-md-3 feature-box text-center col-sm-6">
              <i className="fas fa-recycle font-30px light-icon agro-green-bg-icon circle-icon fade-icon" />
              <h5>Sustainable Practices</h5>
              <p>
                We use organic farming methods, ensuring our practices are
                environmentally friendly and sustainable.
              </p>
            </div>
            <div className="col-md-3 feature-box text-center col-sm-6">
              <i className="fas fa-chart-line font-30px light-icon agro-green-bg-icon circle-icon fade-icon" />
              <h5>Significant Returns</h5>
              <p>
                Both plans offer attractive returns, with guaranteed buy-back
                options after 5 years.
              </p>
            </div>
            <div className="col-md-3 feature-box text-center col-sm-6">
              <i className="fas fa-shield-alt font-30px light-icon agro-green-bg-icon circle-icon fade-icon" />
              <h5>Legal Security</h5>
              <p>
                Land ownership is legally secured through the Land Registry
                Office of Matale, providing you with full legal security and
                bond.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose us End */}
    </>
  );
};

export default WhyChooseSection;

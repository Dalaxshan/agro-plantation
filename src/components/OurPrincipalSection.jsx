const OurPrincipalSection = () => {
    return (
        <>
  {/* Our Principal Virtues Start */}
  <section className="pb-0" id="feature">
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Our 
            </h1>
            <h2 className="mt-10 oswald-font font-100">Principal Virtues</h2>
          </div>
        </div>
      </div>
      <div className="row mt-0">
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 pull-left">
            <div
              className="feature-box text-left wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="pull-left">
                <i className="fas fa-seedling font-50px agro-green-icon" />
              </div>
              <div className="pull-right">
                <h5 className="mt-0">Scale</h5>
                <p>Each acre of land is planted with 2,000 vanilla vines.</p>
              </div>
            </div>
            <div
              className="feature-box text-left mt-30 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="pull-left">
                <i className="fas fa-lightbulb font-50px agro-green-icon" />
              </div>
              <div className="pull-right">
                <h5 className="mt-0">Yield</h5>
                <p>
                  By 2030, we plan to cultivate 4,000,000 vines, expecting a
                  minimum yield of 4 kg per vine, resulting in 16,000,000 kg of
                  raw vanilla beans.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 wow fadeInUp col-sm-12" data-wow-delay="0.2s">
          <img
            className="img-responsive"
            src="src/assets/images/slides/flower.png"
            alt="iphone-big"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 pull-left">
            <div
              className="feature-box-right text-right wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="pull-right">
                <i className="fas fa-hourglass-half font-50px agro-green-icon" />
              </div>
              <div className="pull-left">
                <h5 className="mt-0">Timeline</h5>
                <p>Vanilla vines begin yielding harvests after 2.5 years.</p>
              </div>
            </div>
            <div
              className="feature-box-right text-right mt-30 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="pull-right">
                <i className="fas fa-cogs font-50px agro-green-icon" />
              </div>
              <div className="pull-left">
                <h5 className="mt-0">Processing</h5>
                <p>
                  These beans are processed to produce approximately 4,000,000
                  kg of finished vanilla product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Principal Virtues End */}
</>
    );
}
export default OurPrincipalSection;
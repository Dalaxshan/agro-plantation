import { Link } from "react-router-dom";

const OverseaSection = () => {
  return (
    <>
      {/* Overseas Start */}
      <section className="pt-50 pb-50">
        <div className="clearfix">
          <div className="about-us-bg bg-flex col-md-6" />
          <div className="col-about-right col-md-6 col-md-offset-6">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Our Overseas
            </h1>
            <h2 className="mt-10 oswald-font font-100">Overseas Operations</h2>
            <div className="mt-30">
              <p>
                "Our overseas operations at AgroVentures Plantations are managed
                with the utmost care and precision, ensuring a seamless
                integration and optimal performance across all international
                markets. We implement comprehensive strategies tailored to each
                region, utilizing advanced technologies to maintain consistency
                and efficiency in our global activities.
              </p>
            </div>
            <div className="mt-30">
              <p>
                Our dedicated teams work diligently to coordinate efforts,
                address challenges promptly, and uphold the highest standards of
                excellence in every area we operate in. By focusing on
                meticulous planning and continuous improvement, we ensure that
                our international ventures align with our core values and
                business objectives, delivering exceptional results and
                fostering strong relationships with our global partners."
              </p>
            </div>
            <div className="mt-30">
              <Link to="/contact-us" className="btn btn-color btn-circle btn-animate">
                <span>
                  Let's Talk <i className="fa fa-rocket" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Overseas End */}
    </>
  );
};
export default OverseaSection;

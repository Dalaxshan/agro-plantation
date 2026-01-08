import { Link } from "react-router-dom";

const OurCultivationHeaderSection = () => {
  return (
    <section className="pt-0 pb-0" id="home">
  <div className="full-screen-bg">
    <div className="parallax-img" style={{background: 'url(src/assets/images/paralax/cultivation-bg.jpg) center center / cover scroll no-repeat'}} />
    <div className="hero-text-wrap">
      <div className="hero-text white-color">
        <div className="container text-center">
          <h3 className="white-color text-uppercase">We are excited to present </h3>
          <h2 className="white-color mt-30 text-uppercase">
           Our Cultivation Plans
          </h2>
          <p className="text-center mt-30">
            <Link to="/contact-us" className="btn btn-color btn-circle">Contact Now</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
export default OurCultivationHeaderSection;

import { Link } from "react-router-dom";

const WeAgroSection = () => {
  return (
    <>
      {/* Who We Are Start */}
      <section className="first-ico-box grey-bg pt-50 pb-50" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              WE ARE
            </h1>
              <h2 className="mt-10 oswald-font font-100">
                AgroVenture Plantation
              </h2>
              <div className="mt-30">
                <p>
                  <span className="font-500">
                    Agroventures Plantations (Pvt) Ltd {""}
                  </span>
                  is a company that is focused on Sri Lankan agriculture
                  exports, as well as the local market, of{" "}
                  <span className="font-500">
                    spices, fruits and vegetables{" "}
                  </span>
                  along with other crops that can be grown here.
                  {/* We cultivate on behalf of our customers, who will
          fund a plantation themselves, and we will handle everything so
          that once the harvest is done our customers receive a very
          generous return on their investment. All of our cultivations are
          locally produced and are environmentally safe as we take part in
          sustainable practices. Our main cultivation is Vanilla, often
          considered as green gold. Vanilla is one of the most sought
          after and expensive spices with many uses and an ever-growing
          demand, making it one of the most expensive spices ever and
          being valued more than silver itself. We at Agro-Ventures are
          harnessing our country’s rich climate and soil in order to grow
          this valued asset in a highly sustainable way to give back to
          the environment and country. */}
                </p>
                <Link
                  to="/about-us"
                  className="btn btn-color btn-circle btn-animate"
                >
                  <span>
                    Read more <i className="fa-brands fa-readme" />
                  </span>
                </Link>
              </div>
              {/* <div class="mt-30">
        <p>
          We are hoping to continue the timely tradition of our ancestors
          and strengthen the agro-investment industry in Sri Lanka. So
          join us in our innovative ventures that are sure to provide a
          great return to you and the environment.
        </p>
      </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are End */}
    </>
  );
};
export default WeAgroSection;

import React from "react";

const AboutOurCoreValueSection = () => {
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading ">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Our Core Values
            </h1>
            <h3 className="mt-10 oswald-font font-200 line-height-30">
              Objectively innovate empowered manufactured products
              <br />
              whereas parallel platforms.
            </h3>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-md-8 col-md-offset-2">
            <div className="icon-tabs">
              {/* Nav tabs */}
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation" className="active">
                  <a href="#design" role="tab" data-toggle="tab">
                    <i
                      className="mdi mdi-recycle"
                      style={{ color: "#004d4d", fontSize: "38px" }}
                    />{" "}
                    Sustainable
                  </a>
                </li>
                <li role="presentation">
                  <a href="#development" role="tab" data-toggle="tab">
                    <i
                      className="mdi mdi-medal"
                      style={{ color: "#004d4d", fontSize: "38px" }}
                    />{" "}
                    Standards
                  </a>
                </li>
                <li role="presentation">
                  <a href="#apps" role="tab" data-toggle="tab">
                    <i
                      className="mdi mdi-handshake"
                      style={{ color: "#004d4d", fontSize: "38px" }}
                    />{" "}
                    Trustworth
                  </a>
                </li>
                <li role="presentation">
                  <a href="#seo" role="tab" data-toggle="tab">
                    <i
                      className="mdi mdi-account-group"
                      style={{ color: "#004d4d", fontSize: "38px" }}
                    />
                    Growth
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content text-center">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="design"
                >
                  <p style={{ fontSize: "18px" }}>
                    We are committed to preserving the environment and
                    conserving natural resources through sustainable
                    agricultural practices.
                  </p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="development">
                  <p style={{ fontSize: "18px" }}>
                    We maintain uncompromising standards of excellence in the
                    cultivation and production of all our agricultural products.
                  </p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="apps">
                  <p style={{ fontSize: "18px" }}>
                    Honesty and transparency govern our actions, guiding us in
                    building trustworthy relationships with our customers and
                    stakeholders.
                  </p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="seo">
                  <p style={{ fontSize: "18px" }}>
                    We strive to uplift local communities by providing them with
                    better livelihood opportunities and supporting their growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutOurCoreValueSection;

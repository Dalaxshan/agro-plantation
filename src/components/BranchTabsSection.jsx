const branches = [
  {
    id: "head-office",
    name: "Head Office",
    address: "253, Koswatta, Kaduwela Road, Battaramulla, Sri Lanka",
    contact: "+94 (70) 520 0900",
    email:"info@thevanillashop.lk",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8574202206237!2d79.92745087350724!3d6.907647218583161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257002cdff261%3A0x5c380231f9b1b6!2sThe%20Vanilla%20Shop!5e0!3m2!1sen!2slk!4v1772601741159!5m2!1sen!2slk",
  },
  {
    id: "corporate-office",
    name: "Corporate Office",
    address: "48 Sir Marcus Fernando Mawatha, Colombo 7, Sri Lanka",
    contact: "+94 (11) 287 8766 /  +94 (70) 513 0907",
    email:"info@agroventuresexports.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903148!2d79.85783397350721!3d6.9093914185618095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767863615446!5m2!1sen!2slk",
  },
];

const BranchTabsSection = () => {
  return (
    <section className="white-bg pt-50 pb-50">
      <div className="container">
        <div className="col-sm-8 section-heading">
          <h1 className="dark-green-color">
            <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
            Our Branches
          </h1>
          <h3 className="mt-10 oswald-font font-200 line-height-30">
            Explore our key offices across Sri Lanka.
          </h3>
        </div>
        <div className="light-tabs">
          <ul className="nav nav-tabs text-center mt-30" role="tablist">
            {branches.map((b, i) => (
              <li
                key={b.id}
                className={i === 0 ? "active" : ""}
                role="presentation"
              >
                <a href={`#${b.id}`} role="tab" data-toggle="tab">
                  {b.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content text-left mt-40">
          {branches.map((b, i) => (
            <div
              key={b.id}
              id={b.id}
              role="tabpanel"
              className={`tab-pane fade ${i === 0 ? "in active" : ""}`}
            >
              <div className="row">
                <div className="col-md-5">
                  <h4 className="dark-green-color">{b.name}</h4>

                  <p>
                    <strong>📍 Address:</strong>
                  </p>
                  <p>{b.address}</p>

                  <p className="mt-20">
                    <strong>📞 Contact:</strong>
                  </p>
                  <p>
                    <a href={`tel:${b.contact}`}>{b.contact}</a>
                  </p>
                  <p className="mt-20">
                    <strong>✉️ Email:</strong>
                  </p>
                  <p>
                    <a href={`mailto:${b.email}`}>{b.email}</a>
                  </p>
                </div>

                <div className="col-md-6">
                  <h4 className="dark-green-color">Location Map</h4>
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      height: 300,
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={b.map}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchTabsSection;

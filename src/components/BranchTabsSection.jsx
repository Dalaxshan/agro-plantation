const branches = [
  {
    id: "head-office",
    name: "Head Office",
    address: "No. 123, Main Street, Colombo 05, Sri Lanka",
    contact: "+94 (11) 234 5678",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903148!2d79.85783397350721!3d6.9093914185618095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767863615446!5m2!1sen!2slk",
  },
  {
    id: "corporate-office",
    name: "Corporate Office",
    address: "No. 456, Corporate Plaza, Colombo 07, Sri Lanka",
    contact: "+94 (11) 298 7654",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903148!2d79.85783397350721!3d6.9093914185618095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767863615446!5m2!1sen!2slk",
  },
  {
    id: "western-zonal-office",
    name: "Western Zonal Office",
    address: "No. 789, Western Plaza, Negombo, Sri Lanka",
    contact: "+94 (31) 245 6789",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903148!2d79.85783397350721!3d6.9093914185618095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767863615446!5m2!1sen!2slk",
  },
  {
    id: "matara-office",
    name: "Matara Office",
    address: "No. 321, Main Street, Matara, Sri Lanka",
    contact: "+94 (41) 234 5678",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.6438894637476",
  },
  {
    id: "wattala-office",
    name: "Wattala Regional Office",
    address: "No. 654, Business Centre, Wattala, Sri Lanka",
    contact: "+94 (11) 265 4321",
    map: "#",
  },
  {
    id: "ambalantota-branch",
    name: "Ambalantota Branch",
    address: "Ambalantota, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "galle-zonal-office",
    name: "Galle Zonal Office",
    address: "Galle, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "kurunegala-branch",
    name: "Kurunegala Branch",
    address: "Kurunegala, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "negombo-distribution",
    name: "Negombo Distribution Center",
    address: "Negombo, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "mannar-office",
    name: "Mannar Regional Office",
    address: "Mannar, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "awissawella-branch",
    name: "Awissawella Branch",
    address: "Awissawella, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "vavuniya-branch",
    name: "Vavuniya Branch",
    address: "Vavuniya, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
  {
    id: "tissamaharama-branch",
    name: "Tissamaharama Branch",
    address: "Tissamaharama, Sri Lanka",
    contact: "+94 000 000 0000",
    map: "#",
  },
];

const BranchTabsSection = () => {
  return (
    <section className="white-bg">
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
                </div>

                <div className="col-md-6">
                  <h4 className="dark-green-color">Location Map</h4>
                  <div
                    style={{ borderRadius: 12, overflow: "hidden", height: 300 }}
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

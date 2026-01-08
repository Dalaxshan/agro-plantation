const AboutMeSection = () => {
  return (
    <section className="white-bg pb-0 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-responsive"
              src="/src/assets/images/lawyer-img.png"
              alt="lawyer-img"
            />
          </div>
          <div className="col-md-6 text-left mb-20 mt-50">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Director Message
            </h1>
            <p className="mt-20">
              Etiam eget felis sit amet nunc euismod laoreet. Nunc congue
              sollicitudin bibendum. Pellentesque ut sollicitudin erat. Proin in
              tincidunt nisl. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Cras posuere interdum
              est non malesuada. Ut quis aliquam ipsum. Phasellus viverra ipsum
              velit, in ultrices orci commodo ullamcorper. Ut laoreet vel mi
              eget fringilla.
            </p>
            <p className="mt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae enim neque. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas.
            </p>
            <div className="mt-30">
              <div className="signature-wrapper" style={{position: 'relative', display: 'inline-block'}}>
                <p className="great-font font-35px dark-green-color mb-0" style={{transform: 'rotate(-2deg)', fontWeight: 'bold'}}>~ Nilanka Karunarathne</p>
                <div style={{position: 'absolute', bottom: '-5px', left: '20px', width: '200px', height: '2px', background: 'linear-gradient(to right, #004D4D, transparent)'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

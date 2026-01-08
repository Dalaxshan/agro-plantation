import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const OurBrandsSection = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="container">
        {/* Optional heading (uncomment if you want it back) */}
        {/* <div className="col-sm-8 section-heading text-center mb-40">
          <h2>Our</h2>
          <h3 className="mt-10 oswald-font font-100">Group of Companies</h3>
        </div> */}

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          className="client-slider"
        >
          {/* Replace with your actual logo paths */}
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/1.png" alt="Brand 1" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/2.png" alt="Brand 2" className="img-responsive" />
            </div>
          </SwiperSlide>
          {/* Repeat for all 10 */}
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/3.png" alt="Brand 3" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/4.png" alt="Brand 4" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/5.png" alt="Brand 5" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/6.png" alt="Brand 6" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/7.png" alt="Brand 7" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/8.png" alt="Brand 8" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/9.png" alt="Brand 9" className="img-responsive" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-logo">
              <img src="/src/assets/images/clients/10.png" alt="Brand 10" className="img-responsive" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurBrandsSection;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSection = () => {
  return (
    <section className="parallax-bg-9 fixed-bg pt-50 pb-50" data-stellar-background-ratio="0.2">
      <div className="parallax-overlay" />
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            // navigation={true}
            className="testimonial"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                {/* Add a real testimonial image here */}
                <img
                  src="/images/clients/team-14.jpg" 
                  alt="Jazz Smith"
                  className="testimonial-img"
                />
                <h4>
                  Duis eros dolor, cursus et quam ut, mattis sagittis lectus.
                  Nunc gravida id ligula id faucibus. Aenean fermentum auctor
                  urna, ut semper mauris tempus quis. Aenean non justo erat.
                  Mauris dapibus aliquam metus, consequat blandit nulla
                  congue.
                </h4>
                <h5 className="inter-font upper-case">Jazz Smith</h5>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                <img
                  src="/images/clients/team-15.jpg"
                  alt="Shawn Smith"
                  className="testimonial-img"
                />
                <h4>
                  Duis eros dolor, cursus et quam ut, mattis sagittis lectus.
                  Nunc gravida id ligula id faucibus. Aenean fermentum auctor
                  urna, ut semper mauris tempus quis. Aenean non justo erat.
                  Mauris dapibus aliquam metus, consequat blandit nulla
                  congue.
                </h4>
                <h5 className="inter-font upper-case">Shawn Smith</h5>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                <img
                  src="/images/clients/team-16.jpg"
                  alt="Susan Smith"
                  className="testimonial-img"
                />
                <h4>
                  Duis eros dolor, cursus et quam ut, mattis sagittis lectus.
                  Nunc gravida id ligula id faucibus. Aenean fermentum auctor
                  urna, ut semper mauris tempus quis. Aenean non justo erat.
                  Mauris dapibus aliquam metus, consequat blandit nulla
                  congue.
                </h4>
                <h5 className="inter-font upper-case">Susan Smith</h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
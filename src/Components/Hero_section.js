import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
  return (
    <section className="half-color-box">
      <div className="container spacer por">
        <div className="text-white text-center ml-3">
          <h1 className="bold">What Clients Say</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, at!
          </p>
        </div>
        <div className="test-arrowbox">
          <div className="swiper-button-prev-test">
            <svg fill="red" height="34" className="arrow left">
              <use xlinkHref="#arrow-left" />
            </svg>
          </div>
          <div className="swiper-button-next-test">
            <div className="arrow-right">
              <svg fill="red" height="60" width="60" className="arrow">
                <use xlinkHref="#arrow" />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-test',
            nextEl: '.swiper-button-next-test'
          }}
          pagination={{ clickable: true }}
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="review-box">
                <div className="media">
                  <img className="mr-3" src="https://picsum.photos/50/50" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5>Amanda Jackson</h5>
                    <p className="user-post">CEO, NRD Group</p>
                  </div>
                </div>
                <p className="read">
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the race.
                </p>
                <img className="quote" src="img/icons/quote.svg" alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

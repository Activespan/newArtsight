import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import bannerdata from "../../../data/banner.json";

// install Swiper components
SwiperCore.use([Navigation]);

const settings = {
  autoplay: false,
  speed: 3500,
  grabCursor: false,
  watchSlidesProgress: false,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  allowTouchMove: false,
  noSwiping: true,
};

class Banner extends Component {
  render() {
    return (
      <Swiper
        className="about-us-slider swiper-container p-relative slider-banner-1"
        {...settings}
        navigation
      >
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        {bannerdata.map((item, i) => (
          <SwiperSlide className="swiper-slide slide-item" key={i}>
            <img
              src={process.env.PUBLIC_URL + "/" + item.image}
              className="img-fluid full-width"
              alt={item.subtitle}
            />
            <div className="transform-center z-index-3">
              <div className="container-fluid custom-container">
                <div className="row justify-content-center">
                  <div className={"align-self-center " + item.position}>
                    <div className={item.extraclass}>
                      <h3 className="text-white">{item.subtitle}</h3>
                      <h2
                        className="text-white fw-600"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <h6 className="text-white">{item.description}</h6>

                      <h1 className="text-white fw-400">{item.text}</h1>
                      <Link
                        to="/shop"
                        className="btn-solid with-line btn-big mt-20 mr-1"
                      >
                        <span>
                          Explore
                        </span>
                      </Link>

                      <Link
                          to="/add-gallery"
                          className="btn-solid with-line btn-big mt-20 mr-1"
                      >
                        <span>
                          SUBMIT
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay overlay-bg-dark overlay-bg-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default Banner;

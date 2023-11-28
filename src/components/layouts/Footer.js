import React, { Component, Fragment } from "react";
import instagram from "../../data/instagram.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const settings = {
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: false,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
    1500: {
      slidesPerView: 8,
    },
  },
};

class Footer extends Component {
  render() {
    return (
      <div className="copyright bg-black">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ display: "inlineBlock", textAlign: "center" }}>
                <span className="text-white">
                  ©{" "}
                  <Link to="#" className="text-white">
                    artsight.com
                  </Link>{" "}
                  - 2023 | All Right Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

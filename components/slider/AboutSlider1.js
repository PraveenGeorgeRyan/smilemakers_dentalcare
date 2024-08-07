"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};
export default function AboutSlider1({ altStyle }) {
  return (
    <>
      {!altStyle && (
        <Swiper {...swiperOptions} className="about-slider-all ">
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “The dental services here are excellent. The staff is
                  professional and friendly. My experience was seamless and
                  comfortable.”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Anjali Sharma
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “I received a root canal treatment here, and it was completely
                  painless. The dentists are very skilled and caring.”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Rajiv Kumar
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-32 line-height-p-30">
                  “The clinic is very clean and well-maintained. The orthodontic
                  treatment I received has given me a beautiful smile.”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Laxmi
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “I highly recommend this dental clinic for their excellent
                  service and friendly staff. My dental implant procedure went
                  smoothly.”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Sudheer
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “The teeth whitening treatment was amazing. I am very
                  satisfied with the results and the professional care
                  provided.”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Kavita Reddy
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-arrow-cs">
            <button className="h1p">Prev</button>
            <button className="h1n">Next</button>
          </div>
        </Swiper>
      )}

      {altStyle && (
        <Swiper {...swiperOptions} className="about-slider-all ">
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box about-slider-box2">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “Uphome has saved me a ton of time finding great teanants and
                  managing lease signing. Its sophisticated features help me
                  manage my properties seamlessly and digitally! Park gate sell
                  they west hard for the. Abode stuff noisy manor far”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Enring Haaland
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box about-slider-box2">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “Uphome has saved me a ton of time finding great teanants and
                  managing lease signing. Its sophisticated features help me
                  manage my properties seamlessly and digitally! Park gate sell
                  they west hard for the. Abode stuff noisy manor far”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Enring Haaland
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box about-slider-box2">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-32 line-height-p-30">
                  “Uphome has saved me a ton of time finding great teanants and
                  managing lease signing. Its sophisticated features help me
                  manage my properties seamlessly and digitally! Park gate sell
                  they west hard for the. Abode stuff noisy manor far”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Enring Haaland
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box about-slider-box2">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “Uphome has saved me a ton of time finding great teanants and
                  managing lease signing. Its sophisticated features help me
                  manage my properties seamlessly and digitally! Park gate sell
                  they west hard for the. Abode stuff noisy manor far”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Enring Haaland
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="about-slider-single">
            <div className="about-slider-commnet-icon">
              <img src="/assets/img/icons/about-commnet.svg" alt="" />
            </div>
            <div className="about-slider-box about-slider-box2">
              <div className="hadding-about">
                <p className="font-f-2 weight-400 font-18 line-height-p-30">
                  “Uphome has saved me a ton of time finding great teanants and
                  managing lease signing. Its sophisticated features help me
                  manage my properties seamlessly and digitally! Park gate sell
                  they west hard for the. Abode stuff noisy manor far”
                </p>
                <div className="space24" />
                <div className="about-slider-hadding-bottom">
                  <h6 className="font-f-2 font-16 line-height-16 weight-500">
                    Enring Haaland
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-arrow-cs">
            <button className="h1p">Prev</button>
            <button className="h1n">Next</button>
          </div>
        </Swiper>
      )}
    </>
  );
}

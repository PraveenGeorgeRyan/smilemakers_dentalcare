"use client";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation
  navigation: {
    nextEl: ".testimonial-next-arrow",
    prevEl: ".testimonial-prev-arrow",
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
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function Equipments() {
  return (
    <>
      <div className="litings sp2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                className="hadding2"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                  Latest <span className="after">Equipments</span>
                </h1>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <div className="slider-arrows">
                <div className="testimonial-next-arrow testimonial-next-arrow1">
                  <span>
                    <i className="fa-solid fa-arrow-left" />
                  </span>
                </div>
                <div className="testimonial-prev-arrow testimonial-prev-arrow1">
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            <Swiper {...swiperOptions} className="ml--15">
              <SwiperSlide className="siting-single-sliider">
                <div className="liting-slider-img comon-slider-img">
                  <div className="img-border">
                    <img src="/assets/img/image/dental-chair.jpg" alt="" />
                  </div>
                </div>
                <div className="space20" />
                <div className="liting-hadding-all hadding2">
                  <div className="liting-hadding hadding2">
                    <h4 className="font-f-2 font-18 line-height-18 weight-500">
                      Dental Chair
                    </h4>
                    <div className="space8" />
                    <p className="font-16 line-height-16 weight-400">
                      A fully adjustable chair for patient comfort during dental
                      procedures.
                    </p>
                  </div>
                  <div className="space24" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="siting-single-sliider">
                <div className="liting-slider-img comon-slider-img">
                  <div className="img-border">
                    <img src="/assets/img/image/dental-drill.jpg" alt="" />
                  </div>
                </div>
                <div className="space20" />
                <div className="liting-hadding-all hadding2">
                  <div className="liting-hadding hadding2">
                    <h4 className="font-f-2 font-18 line-height-18 weight-500">
                      Dental Drill
                    </h4>
                    <div className="space8" />
                    <p className="font-16 line-height-16 weight-400">
                      A high-speed rotary tool used to remove decay and shape
                      tooth structure.
                    </p>
                  </div>
                  <div className="space24" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="siting-single-sliider">
                <div className="liting-slider-img comon-slider-img">
                  <div className="img-border">
                    <img src="/assets/img/image/dental-scaler.jpg" alt="" />
                  </div>
                </div>
                <div className="space20" />
                <div className="liting-hadding-all hadding2">
                  <div className="liting-hadding hadding2">
                    <h4 className="font-f-2 font-18 line-height-18 weight-500">
                      Dental Scaler
                    </h4>
                    <div className="space8" />
                    <p className="font-16 line-height-16 weight-400">
                      An ultrasonic device used to remove plaque and tartar from
                      teeth.
                    </p>
                  </div>
                  <div className="space24" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="siting-single-sliider">
                <div className="liting-slider-img comon-slider-img">
                  <div className="img-border">
                    <img src="/assets/img/image/xray-machine.jpg" alt="" />
                  </div>
                </div>
                <div className="space20" />
                <div className="liting-hadding-all hadding2">
                  <div className="liting-hadding hadding2">
                    <h4 className="font-f-2 font-18 line-height-18 weight-500">
                      Dental X-ray Machine
                    </h4>
                    <div className="space8" />
                    <p className="font-16 line-height-16 weight-400">
                      An imaging device used to take X-rays of the patient's
                      teeth and jaws.
                    </p>
                  </div>
                  <div className="space24" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="siting-single-sliider">
                <div className="liting-slider-img comon-slider-img">
                  <div className="img-border">
                    <img src="/assets/img/image/dental-light.jpg" alt="" />
                  </div>
                </div>
                <div className="space20" />
                <div className="liting-hadding-all hadding2">
                  <div className="liting-hadding hadding2">
                    <h4 className="font-f-2 font-18 line-height-18 weight-500">
                      Dental Light
                    </h4>
                    <div className="space8" />
                    <p className="font-16 line-height-16 weight-400">
                      An overhead light used to illuminate the oral cavity
                      during examinations and procedures.
                    </p>
                  </div>
                  <div className="space24" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

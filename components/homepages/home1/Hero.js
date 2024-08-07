"use client";
import Link from "next/link";

import { useState } from "react";
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="hero-area home2-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="home1-hero-hadding">
                <p
                  className="main-span-p font-f-2 font-14 line-height-14 font-w weight-500"
                  data-aos="fade-right"
                  data-aos-duration={700}
                >
                  <span>New</span>We just launched our service in Shahpur.
                </p>
                <div className="space12" />
                <div className="hadding2 hadding2-main home2-header-hadding">
                  <h1
                    className="font-f-2 weight-700 font-40 font-lg-60 line-height-48 line-height-lg-65"
                    data-aos="fade-right"
                    data-aos-duration={900}
                  >
                    Your Smile, Our <span className="after">Priority</span>
                  </h1>
                  <div className="space24" />
                  <p
                    className="font-18 font-f-2 weight-400 line-height-p-30"
                    data-aos="fade-right"
                    data-aos-duration={1100}
                  >
                    Discover a healthier, happier you with our expert dental
                    care.
                  </p>
                  <div className="space50" />
                  <div
                    className="header-site-btn"
                    data-aos="fade-right"
                    data-aos-duration={1100}
                  >
                    <Link
                      href="/contact"
                      className="cta-btn font-f-2 weight-700"
                    >
                      Book an appointment
                    </Link>
                  </div>
                </div>
                <div className="space50" />
                {/* <div data-aos="fade-right" data-aos-duration={1300}>
                  <ul className="nav nav-pills mb-3">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                      <button
                        className={
                          activeIndex == 1
                            ? "nav-link  font-f-2 active"
                            : "nav-link  font-f-2"
                        }
                      >
                        For Sale
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                      <button
                        className={
                          activeIndex == 2
                            ? "nav-link  font-f-2 active"
                            : "nav-link  font-f-2"
                        }
                      >
                        For Rent
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className={
                        activeIndex == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="header-input-form header-input-form2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Search by city, address, zip, agent, MLS..."
                        />
                        <div className="input-form-btn button1 input-form-btn button2 font-f-1">
                          <Link href="#" className="input-form-btn-icon2">
                            <img
                              src="/assets/img/icons/home2-hero-input2.svg"
                              alt=""
                            />
                          </Link>
                          <button>
                            <img
                              src="/assets/img/icons/home2-hero-input1.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="space40" />
                      <div className="header-menu-tags">
                        <div className="tags-hadding hadding2">
                          <h4 className="font-16 line-height-16 font-f-2 weight-400">
                            Recent Search:
                          </h4>
                        </div>
                        <div className="tags-menu">
                          <ul className="font-f-2 font-14 weight-400 pera-c-3">
                            <li>2 BHK</li>
                            <li>Bunglaw</li>
                            <li className="active">Apartment</li>
                            <li>London</li>
                            <li>Budapest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                    >
                      <div className="header-input-form header-input-form2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Search by city, address, zip, agent, MLS2..."
                        />
                        <div className="input-form-btn button1 input-form-btn button2 font-f-1">
                          <Link href="#" className="input-form-btn-icon2">
                            <img
                              src="/assets/img/icons/home2-hero-input2.svg"
                              alt=""
                            />
                          </Link>
                          <button>
                            <img
                              src="/assets/img/icons/home2-hero-input1.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="space40" />
                      <div className="header-menu-tags">
                        <div className="tags-hadding hadding2">
                          <h4 className="font-16 line-height-16 font-f-2 weight-400">
                            Recent Search:
                          </h4>
                        </div>
                        <div className="tags-menu">
                          <ul className="font-f-2 font-14 weight-400 pera-c-3">
                            <li>2 BHK</li>
                            <li>Bunglaw</li>
                            <li className="active">Apartment</li>
                            <li>London</li>
                            <li>Budapest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div
                className="home2-main-hero-img"
                data-aos="zoom-out"
                data-aos-duration={1100}
              >
                <img src="/assets/img/image/hero-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

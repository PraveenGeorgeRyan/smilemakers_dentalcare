"use client";
import Layout from "@/components/layout/Layout";
import TeamSlider1 from "@/components/slider/TeamSlider1";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About us">
        <div>
          <div className="about-besniess">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 ">
                  <div className="apartment-imgs">
                    <div className="apartment-img1-img-right">
                      <img
                        src="/assets/img/shapes/apartment-img-1.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="apartment-img2-img-right"
                      data-aos="zoom-out"
                      data-aos-duration={800}
                    >
                      <img src="/assets/img/image/patient-care.png" alt="" />
                    </div>
                    <div
                      className="apartment-img3-img-right"
                      data-aos="zoom-out"
                      data-aos-duration={1200}
                    >
                      <img
                        src="/assets/img/shapes/apartment-img-3.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="hadding2 font-f-2">
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-55">
                      Transforming Smiles with{" "}
                      <span className="after">Compassion.</span>
                    </h1>
                    <div className="space20" />
                    <p className="font-18 line-height-p-30 weight-400 fotn-f-2">
                      At SmileMakers DentalCare, we offer comprehensive dental
                      care, combining state-of-the-art technology with
                      personalized treatment to ensure your best oral health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====about besnisess end=======*/}
          {/*=====about mission start=======*/}
          <div className="mission sp2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto text-center">
                  <div className="hadding2">
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                      Our <span className="after">mission</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="space40" />
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="mission-box-all">
                    <div className="mission-hadding">
                      <h6 className="misson-num">1</h6>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          {" "}
                          <Link href="#">Comprehensive Care</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Offering a full range of dental services for all ages
                          to maintain your oral health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="mission-box-all">
                    <div className="mission-hadding">
                      <h6 className="misson-num">2</h6>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-400">
                          {" "}
                          <Link href="#">Preventative Focus</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Emphasizing prevention to avoid serious dental issues
                          and promote long-term health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="mission-box-all">
                    <div className="mission-hadding">
                      <h6 className="misson-num">3</h6>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line-height-22 weight-500">
                          {" "}
                          <Link href="#">Personalized Treatments</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Tailoring each treatment to meet the unique needs of
                          each and every patient.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="mission-box-all">
                    <div className="mission-hadding">
                      <h6 className="misson-num">4</h6>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          {" "}
                          <Link href="#">Ongoing Education</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Continually advancing our skills and knowledge to
                          provide the best care possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====about mission end=======*/}
          {/*=====about choose us start=======*/}
          <div className="choose-us-about sp2 page-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="hadding2">
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                      Why <span className="after">choose us</span>
                    </h1>
                    <div className="space24" />
                    <p className="font-f-2 weight-400 line-height-p-30 font-18">
                      Our dedication to providing high-quality dental care and
                      ensuring patient satisfaction makes us stand out.
                    </p>
                    <div className="space32" />
                    <div className="home2-btn">
                      <Link
                        className="font-18 line-height-30 font-f-2 font-w"
                        href="/contact"
                      >
                        Schedule an Appointment
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-icon-box choose-icon-box">
                    <div>
                      <div className="about-choosse-box-icon">
                        <img
                          src="/assets/img/icons/about-choose-icon.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          {" "}
                          <Link href="#">24/7 Customer Care</Link>
                        </h4>
                        <div className="space12" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          We're always here to assist you with any dental
                          emergencies or inquiries you might have.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-icon-box choose-icon-box">
                    <div>
                      <div className="about-choosse-box-icon">
                        <img
                          src="/assets/img/icons/about-choose-icon.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          {" "}
                          <Link href="#">Experienced Team</Link>
                        </h4>
                        <div className="space12" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Our team of highly skilled professionals is committed
                          to providing exceptional dental care.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-icon-box choose-icon-box">
                    <div>
                      <div className="about-choosse-box-icon">
                        <img
                          src="/assets/img/icons/about-choose-icon.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          {" "}
                          <Link href="#">Comprehensive Services</Link>
                        </h4>
                        <div className="space12" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          From routine check-ups to advanced procedures, we
                          cover all aspects of dental care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====about choose us end=======*/}
          {/*=====about vision start=======*/}
          <div className="about-vision sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="apartment-imgs">
                    <div className="apartment-img1">
                      <img
                        src="/assets/img/shapes/apartment-img-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="apartment-img2">
                      <img
                        src="/assets/img/image/doctor-with-glass.png"
                        alt=""
                      />
                    </div>
                    <div className="apartment-img3">
                      <img
                        src="/assets/img/shapes/apartment-img-3.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hadding2">
                    <div className="hadding2">
                      <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                        Our <span className="after">Vision</span>
                      </h1>
                      <div className="space24" />
                      <p className="font-f-2 weight-400 line-height-28 font-16">
                        Our vision is to provide unparalleled dental care
                        through innovation and dedication to patient well-being.
                        We aim to be the leaders in dental health by ensuring
                        each patient leaves with a smile they are proud of.
                      </p>
                    </div>
                  </div>
                  <div className="space24" />
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item accordion-item2 font-f-2">
                      <h2
                        className="accordion-header active-header active-header2"
                        id="headingOne"
                        onClick={() => handleToggle(1)}
                      >
                        <button
                          className={
                            isActive.key == 1
                              ? "accordion-button accordion-button2"
                              : "accordion-button accordion-button2 collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is our approach to patient care?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={
                          isActive.key == 1
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body accordion-body2">
                          Our approach is patient-centric, focusing on
                          personalized care tailored to each individual's needs.
                          We believe in preventative care, education, and using
                          the latest technologies to achieve optimal dental
                          health.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion-item font-f-2">
                      <h2
                        className="accordion-header accordion-header2"
                        id="headingTwo"
                        onClick={() => handleToggle(2)}
                      >
                        <button
                          className={
                            isActive.key == 2
                              ? "accordion-button accordion-button2"
                              : "accordion-button accordion-button2 collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How do we stay at the forefront of dental technology?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className={
                          isActive.key == 2
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body accordion-body2">
                          We continually invest in the latest dental
                          technologies and training for our staff. This ensures
                          we offer cutting-edge treatments and techniques,
                          providing the highest standard of care to our
                          patients.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                      <h2
                        className="accordion-header accordion-header2 accordion-header2"
                        id="headingThree"
                        onClick={() => handleToggle(3)}
                      >
                        <button
                          className={
                            isActive.key == 3
                              ? "accordion-button accordion-button2"
                              : "accordion-button accordion-button2 collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What makes our dental clinic unique?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className={
                          isActive.key == 3
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body accordion-body2">
                          Our clinic stands out due to our commitment to patient
                          satisfaction, our highly skilled team, and our
                          comprehensive range of services. We strive to create a
                          welcoming and comfortable environment for all our
                          patients.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====about vision end=======*/}
        </div>
      </Layout>
    </>
  );
}

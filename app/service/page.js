import Layout from "@/components/layout/Layout";
import AboutSlider1 from "@/components/slider/AboutSlider1";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          <div className="service-page-box-all sp2">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img
                          src="/assets/img/icons/tooth-cleaning.svg"
                          alt=""
                        />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Tooth Cleaning</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A cosmetic procedure to make teeth whiter and
                          brighter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img
                          src="/assets/img/icons/dental-implant.svg"
                          alt=""
                        />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Dental Implants</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A surgical procedure to replace missing teeth with
                          artificial ones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/root-canal.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Root Canal Treatment</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A procedure to treat infection at the center of a
                          tooth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/braces.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Orthodontics</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          Dealing with the correction of teeth and jaws
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/bright-tooth.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Teeth Whitening</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A cosmetic procedure to make teeth whiter and
                          brighter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/dentures.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Dentures</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          Replacements for missing teeth and surrounding
                          tissues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img
                          src="/assets/img/icons/tooth-extraction.svg"
                          alt=""
                        />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Tooth Extraction</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          Removing a tooth from its socket in the bone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/tooth-braces.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Dental Bridge</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A dental restoration method by joining an artificial
                          tooth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/smile.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Cosmetic Dentistry</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          Procedures aimed at creating a positive change to your
                          smile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/dental-crown.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Dental Crowns</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A cap placed over a tooth to restore its shape, size,
                          strength.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/filling.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Tooth Fillings</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          A way to restore a tooth damaged to its normal shape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <div className="porpertice-slider-box">
                      <div className="porpertice-box-icon">
                        <img src="/assets/img/icons/decayed-tooth.svg" alt="" />
                      </div>
                      <div className="space60" />
                      <div className="hadding2 font-f-2">
                        <h4 className="font-20 line-height-20 weight-500">
                          <Link href="#">Gum Disease Treatment</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-16 line-height-16 weight-400">
                          Treatment of gum disease and restore gum health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====service page box end=======*/}
          {/*=====ABOUT US END=======*/}
          <div className="litings home1-about-us sp2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto text-center">
                  <div className="hadding2 apartment2-hadding font-f-2">
                    <h1
                      className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      What <span className="after">customers</span> <br />
                      say about our services.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="space60" />
              <div className="row" data-aos="fade-up" data-aos-duration={900}>
                <AboutSlider1 />
              </div>
            </div>
          </div>
          {/*=====ABOUT US  END=======*/}
          {/*=====SUBSRIBE START=======*/}
          {/* <div className="subsribe-all sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="all-subsribe-hadding">
                    <h1 className="font-f-2 weight-500 font-30 font-lg-45 line-height-30 line-height-lg-45 font-w">
                      Get the properties you're interested in delivered straight
                      to your inbox.
                    </h1>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="comon-subsribe-all-input">
                    <input type="email" placeholder="Enter your email here" />
                    <div className="subsribe-btn">
                      <div className="home2-btn">
                        <button className="font-18 line-height-30 weight-700 font-f-2 font-w">
                          Get Notified
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Layout>
    </>
  );
}

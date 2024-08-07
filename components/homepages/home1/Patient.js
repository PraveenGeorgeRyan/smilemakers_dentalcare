import Link from "next/link";

export default function Patient() {
  return (
    <>
      <div className="apartment sp2" id="apartment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="apartment-imgs">
                <div className="apartment-img1">
                  <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                </div>
                <div
                  className="apartment-img2"
                  data-aos="zoom-out"
                  data-aos-duration={800}
                >
                  <img src="/assets/img/image/man-with-toothache.png" alt="" />
                </div>
                <div
                  className="apartment-img3"
                  data-aos="zoom-out"
                  data-aos-duration={1300}
                >
                  <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hadding2 apartment-hadding font-f-2">
                <h1
                  className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55"
                  data-aos="fade-left"
                  data-aos-duration={800}
                >
                  Are you suffering from <br />{" "}
                  <span className="after">dental problems?</span>
                </h1>
                <div className="space32" />
                <p
                  className="font-18 line-height-p-30"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                >
                  Don't let dental pain control your life. Our experienced
                  dentists are here to help you find relief and restore your
                  oral health.
                </p>
                <div className="space50" />
                <div
                  className="home2-btn"
                  data-aos="fade-left"
                  data-aos-duration={1300}
                >
                  <Link
                    className="font-18 line-height-30 font-f-2 font-w"
                    href="/contact"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

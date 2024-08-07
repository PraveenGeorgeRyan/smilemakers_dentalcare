export default function Doctor() {
  return (
    <>
      <div className="apartment sp2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hadding2 apartment2-hadding font-f-2">
                <h1
                  className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55"
                  data-aos="fade-right"
                  data-aos-duration={500}
                >
                  Meet Our Dental
                  <span className="after"> experts.</span>
                </h1>
                <div className="space32" />
                <p
                  className="font-16 line-height-18 line-height-p-30"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Our dedicated team of dental professionals is committed to
                  providing exceptional care and personalized treatment for
                  patients of all ages.
                </p>
                <div className="space50" />
                <div
                  className="home2-btn"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <a
                    className="font-18 line-height-30 font-f-2 font-w"
                    href="/contact"
                  >
                    Find Your Doctor
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="apartment-imgs img-right">
                <div className="apartment-img1-img-right">
                  <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                </div>
                <div
                  className="apartment-img2-img-right"
                  data-aos="zoom-out"
                  data-aos-duration={800}
                >
                  <img
                    src="/assets/img/image/indian-dental-doctor.png"
                    alt=""
                  />
                </div>
                <div
                  className="apartment-img3-img-right"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                >
                  <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                </div>
                <div
                  className="apartment-img4-img-right"
                  data-aos="flip-left"
                  data-aos-duration={1200}
                >
                  {/* <img src="/assets/img/shapes/experts-icon1.svg" alt="" /> */}
                  <div>
                    <div className="porpertice-box-icon">
                      <img src="/assets/img/icons/online-dentist.svg" alt="" />
                    </div>
                    <div className="space30" />
                    <div className="hadding2 font-f-2">
                      <h4 className="font-24 line-height-20 weight-600">
                        Dr. Mamatha Bunga
                      </h4>
                      <div className="space16" />
                      <p className="font-20 line-height-16 weight-400 text-black">
                        BDS, MDS
                      </p>
                      <p className="font-20 line-height-16 weight-400 text-black">
                        Oral and Maxillofacial Surgery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

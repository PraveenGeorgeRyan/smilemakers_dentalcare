import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="footer-area padding-top font-f-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer mr50 hadding2">
                <div className="site-logo home1-site-logo">
                  <Link href="#">
                    <img src="/assets/img/logo/brand-logo.png" alt="" />
                  </Link>
                  {/* <span className="font-f-2">We’re happy to help you</span> */}
                </div>
                <div className="space30" />
                <p className="font-f-2 font-16 line-height-26">
                  Your smile is our priority. At SmileMakers DentalCare, we
                  provide comprehensive dental services to ensure your dental
                  health and satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg col-sm-6 hadding2">
              <div className="single-footer">
                <h3 className="font-f-1 font-20 weight-700 line-height-20">
                  Discover
                </h3>
                <div>
                  <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 hadding2">
              <div className="single-footer">
                <h3 className="font-f-2 font-20 weight-700 line-height-20">
                  Information
                </h3>
                <div>
                  <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                    <li>
                      <Link href="#">Licensing</Link>
                    </li>
                    <li>
                      <Link href="#">privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="#">Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 hadding2">
              <div className="single-footer-contact">
                <h3 className="font-f-2 font-20 weight-700 line-height-20">
                  Get in touch
                </h3>
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img src="/assets/img/icons/footer-icon-1.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="foonter-contact-p">
                      <Link href="/tel:+910225850556">+91 8757291797</Link>
                    </div>
                    <div className="foonter-contact-p">
                      <Link href="/tel:+910225850556">+91 9381477133</Link>
                    </div>
                  </div>
                </div>
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img src="/assets/img/icons/footer-icon-2.svg" alt="" />
                    </div>
                  </div>
                  <div className="foonter-contact-p">
                    <a
                      href="mailto:Mamatha@gmail.com"
                      class="font-f-2 font-20 weight-400 line-height-30 underline"
                    >
                      Mamatha@gmail.com
                    </a>
                    <a
                      href="/mailto:SmileMakersDentalCare@gmail.com"
                      className="font-f-2 font-20 weight-400 line-height-30 underline"
                    >
                      SmileMakersDentalCare@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p className="font-16 weight-400 font-f-2 line-height-16 pera-c-1">
                © {new Date().getFullYear()} SmileMakers DentalCare All Rights
                Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-right">
              <div className="social social1 comon-footer-icons">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-github" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

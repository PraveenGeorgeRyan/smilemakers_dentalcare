import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header>
        <div
          className={`header-area d-none d-lg-block ${scroll ? "sticky" : ""}`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo home1-site-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/brand-logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu-ex main-menu-ex1">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">
                          Home <i className="fa-solid" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/service">
                          Services <i className="fa-solid" />
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-site-btn">
                    <ReactWhatsapp
                      number="+91 8757291797"
                      className="cta-btn whatsapp-btn font-f-2 weight-700"
                      message="Hello, I would like to know more about your dental services."
                    >
                      <FaWhatsapp className="whatsapp-icon" />
                      Whatsapp
                    </ReactWhatsapp>

                    <Link
                      href="/contact"
                      className="cta-btn font-f-2 weight-700"
                    >
                      Book Online
                    </Link>
                  </div>
                  <div className="mobile-menu-bar d-lg-none">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

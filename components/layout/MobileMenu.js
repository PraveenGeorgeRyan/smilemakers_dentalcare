import Link from "next/link";
import { useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileHeader({ isMobileMenu, handleMobileMenu }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleToggle = (key) => {
    setActiveSubMenu(activeSubMenu === key ? null : key);
  };

  return (
    <>
      <div className="mobile-header mobile-header-4 d-block d-lg-none">
        <div className="col-12">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <Link href="/">
                <img src="/assets/img/logo/brand-logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}
      >
        <div className="menu-close" onClick={handleMobileMenu}>
          <i className="fa-solid fa-xmark menu-close-icon" />
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ReactWhatsapp
            number="+91 8757291797"
            className="cta-btn whatsapp-btn font-f-2 weight-700"
            message="Hello, I would like to know more about your dental services."
          >
            <FaWhatsapp className="whatsapp-icon" />
            Whatsapp
          </ReactWhatsapp>
          <div className="space16" />
          <Link href="/contact" className="cta-btn font-f-2 weight-700">
            Book Online
          </Link>
        </div>
      </div>
    </>
  );
}

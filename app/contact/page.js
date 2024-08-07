"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false); // Use state for loading
  const formRef = useRef(null); // Create a form ref

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setIsLoading(true); // Set loading state before submission
    const senderFirstName = event.target.elements.firstName.value;
    const senderLastName = event.target.elements.lastName.value;
    const senderEmail = event.target.elements.senderEmail.value;
    const message = event.target.elements.message.value;

    // Fetch
    // to be updated after deployment
    const res = await fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify({
        senderFirstName,
        senderLastName,
        senderEmail,
        message,
      }), // Or use FormData object directly
    });

    const { data, error } = await res.json();
    // ... handle response
    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
      formRef.current?.reset(); // Reset the form using ref
    }

    setIsLoading(false); // Reset loading state after submission
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          <div className="contact-all-page sp2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto text-center">
                  <div className="hadding2">
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                      Request a <span className="after">Call Back</span>
                    </h1>
                  </div>
                  <div className="space60" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 text-center">
                  <div className="contact-page-box">
                    <div className="contact-box-img">
                      <img
                        src="/assets/img/icons/contact-img-icon3.svg"
                        alt=""
                      />
                    </div>
                    <div className="space20" />
                    <div className="contact-hadding">
                      <h4 className="font-f-2 font-24 line-height-24 weight-700">
                        SmileMakers DentalCare
                      </h4>
                      <div className="space20" />
                      <Link
                        href="#"
                        className="font-f-2 font-20 weight-400 line-height-30"
                      >
                        Opposite R.S brothers,near CMR school,Shapur nagar
                      </Link>
                      <Link
                        href="#"
                        className="font-f-2 font-20 weight-400 line-height-30"
                      >
                        Hyderabad, India
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                  <div className="contact-page-box">
                    <div className="contact-box-img">
                      <img
                        src="/assets/img/icons/contact-img-icon2.svg"
                        alt=""
                      />
                    </div>
                    <div className="space20" />
                    <div className="contact-hadding">
                      <h4>
                        <Link
                          href="#"
                          className="font-f-2 font-24 line-height-24 weight-700"
                        >
                          Phone Number
                        </Link>
                      </h4>
                      <div className="space20" />
                      <Link
                        href="/tel:674-493-4289"
                        className="font-f-2 font-20 weight-400 line-height-30"
                      >
                        +91 8757291797
                      </Link>{" "}
                      <br />
                      <div className="space20" />
                      <Link
                        href="/tel:606-661-0241"
                        className="font-f-2 font-20 weight-400 line-height-30"
                      >
                        +91 9381477133
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                  <div className="contact-page-box">
                    <div className="contact-box-img">
                      <img
                        src="/assets/img/icons/contact-img-icon1.svg"
                        alt=""
                      />
                    </div>
                    <div className="space20" />
                    <div className="contact-hadding">
                      <h4>
                        <Link
                          href="#"
                          className="font-f-2 font-24 line-height-24 weight-700"
                        >
                          Our Mail Services
                        </Link>
                      </h4>
                      <div className="space20" />
                      <a
                        href="mailto:Mamatha@gmail.com"
                        class="font-f-2 font-20 weight-400 line-height-30 underline"
                      >
                        Mamatha@gmail.com
                      </a>
                      <div className="space20" />
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
              <div className="space70" />
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="contact-from-all">
                    <div className="hadding2">
                      <h4 className="font-f-2 weight-700 font-24 font-lg-24 line-height-30 line-height-lg-45">
                        Send us a Message
                      </h4>
                      <div className="space24" />
                      <p className="font-16 line-height-18 font-f-2 weight-400">
                        We're here to help you achieve optimal oral health.
                        Contact us to schedule an appointment or to learn more
                        about our dental services.
                      </p>
                    </div>
                    <div className="space10" />
                    <form onSubmit={handleSubmit} ref={formRef}>
                      <div className="contact-page-form">
                        <div className="forom-input">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            maxLength={500}
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            maxLength={500}
                          />
                        </div>
                        <div className="space10" />
                        <div className="form-input">
                          <input
                            type="email"
                            name="senderEmail"
                            placeholder="Your email"
                            required
                            maxLength={500}
                          />
                        </div>

                        <div className="forom-input">
                          <textarea
                            name="message"
                            placeholder="Your message"
                            className="contact-textarea"
                            required
                            maxLength={5000}
                            rows={6}
                          />
                          <div className="space10" />
                          <button
                            type="submit"
                            className="contact-button"
                            disabled={isLoading} // Disable button while loading
                          >
                            {isLoading ? (
                              <div className="loading-spinner"></div>
                            ) : (
                              <>
                                Submit
                                <span className="button-icon-wrapper">
                                  <FaPaperPlane className="button-icon" />
                                </span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="space20" />
                  <div className="contact-img">
                    <img src="/assets/img/image/contact-image3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="space70" />
              <div className="contact-map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd"
                  width={600}
                  height={550}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.2031991232841!2d78.4451025195468!3d17.516447598962085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9027247a54d3%3A0xc87de58a2502f8f5!2sBhaskara%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1723033007782!5m2!1sen!2sin"
                  width={600}
                  height={550}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.2035061839966!2d78.44450127523876!3d17.516388996285837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9027247502ff%3A0x6d0d3bd7eeaf0a48!2s4-32-117%2C%20Shapur%20Nagar%2C%20Chinthal%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana%20500055!5e0!3m2!1sen!2sin!4v1723033459811!5m2!1sen!2sin"
                  width="600"
                  height="700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/*=====SUBSRIBE START=======*/}
          {/* <div className="subsribe-all sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="all-subsribe-hadding">
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45 font-w">
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

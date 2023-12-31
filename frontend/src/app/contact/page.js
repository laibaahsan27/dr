"use client";
import React, { useState, useEffect } from "react";
import "./contact.css";
import Image from "next/image";
import clock from "../../images/Clock.svg";
import clockPhone from "../../images/clockPhone.svg";
import addressPin from "../../images/MapPinLine.svg";
import addressPinPhone from "../../images/MapPinLinePhone.svg";
import user from "../../images/UserCircle.svg";
import userPhone from "../../images/UserCircle Phone.svg";
import ContactCard from "@/components/contactThird/ContactCard";
import Nav from "@/components/Nav/Nav";
import Foot from "@/components/Footer/Footer";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Nav />

      <div className="contactContainer">
        <div className="headingCC">
          <p className="headingContact">Contact</p>
        </div>
        <div className="Middle">
          <div className="leftcardCover">
            <div className="leftcard">
              <div className="Lcinner">
                <div className="LCfirst">
                  <div className="LCimg">
                    <div className="LCimg">
                      <Image
                        className="clock imgTop"
                        src={windowWidth <= 786 ? clockPhone : clock}
                        alt="clock"
                      />
                    </div>
                  </div>
                  <div className="LCtext">
                    <h3 className="LCoh">Open Hours</h3>
                    <div className="Lccover">
                      <div className="LCtextInner">
                        <p className="Oncul">Onsite Consultation:</p>
                        <p className="OnTime">9:00 am - 10:00 am</p>
                        <p className="OnTime">8:00 pm - 10:00 pm</p>
                      </div>
                      <div className="LCtextInner2 LCtextInner">
                        <p className="Oncul">Online Consultation:</p>
                        <p className="OnTime">11:00 am - 7:00 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="LCsecond LCfirst">
                  <div className="LCimg">
                    <div className="LCimg">
                      <Image
                        className="imgTop"
                        src={windowWidth <= 786 ? addressPinPhone : addressPin}
                        alt="addressPin"
                      />
                    </div>
                  </div>
                  <div className="LCtext addPin">
                    <h3 className="LCoh">Address</h3>
                    <div className="LCtextInner">
                      <p className="wha">
                        NR-38, Ground Floor NATHUPUR Road NATHUPUR Sector 24
                        Gurugram Haryana 122002
                      </p>
                    </div>
                  </div>
                </div>

                <div className="LCsecond LCfirst">
                  <div className="LCimg">
                    <div className="LCimg">
                      <Image
                        className="imgTop"
                        src={windowWidth <= 786 ? userPhone : user}
                        alt="user"
                      />
                    </div>
                  </div>
                  <div className="LCtext addPin">
                    <h3 className="LCoh">Get In Touch</h3>
                    <div className="LCtextInner brj">
                      <p className="">E: agarwalakanksha19@gmail.com</p>
                      <p className="">P: +91 9990363087</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rightcard">
            <iframe
              className="ContactMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.839763774006!2d77.10395277418029!3d28.484371890795828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fdcb63f2dad%3A0x85e24acd46520244!2sLa%20Midas%20Clinic-%20Laser%20Hair%20Removal%2C%20Tattoo%20Removal%2C%20Acne%20and%20Acne%20Scars%20%26%20Pigmentation%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1701608126783!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <ContactCard />
      </div>
      <Foot />
    </>
  );
};

export default page;

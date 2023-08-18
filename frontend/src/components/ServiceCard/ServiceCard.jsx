import React from "react";
import "./serviceCard.css";
import Image from "next/image";
import phone from "../../images/Phone.svg";
import mail from "../../images/mail.svg";

const ServiceCard = () => {
  return (
    <>
      <div className="contactNow">
        <div className="contactNowInner">
          <div className="contactHeading">Contact Now</div>

          <div className="serviceForm">
            <form className="serviceFormInner" action="">
              <input className="SFinput" type="text" placeholder="Full Name" />
              <input
                className="SFinput"
                type="text"
                placeholder="Phone Number"
              />
              <input className="SFinput" type="text" placeholder="Email" />
              <input
                className="SFinput"
                type="text"
                placeholder="Book Service"
              />
              <button className="SFbutton" type="submit">
                Book an appointment
              </button>
              <a className="SFconsultation" href="">
                Or book an Online Consultaion
              </a>
            </form>
          </div>

          <div className="location">
            <div className="contactHeading">Our Location</div>
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8427460706107!2d77.1045770741803!3d28.48428209079982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f3f17329a3d%3A0x7f8a3e8043429deb!2sEHI%20International%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1692267910213!5m2!1sen!2sin"
                width="372"
                height="200"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="maps"
              ></iframe>
            </div>
          </div>

          <div className="serviceCardContact">
            <div className="SCC">
              <Image src={phone} />
              <span>+91 9990363087</span>
            </div>
            <div className="SCC">
              <Image src={mail} />
              <span>email@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

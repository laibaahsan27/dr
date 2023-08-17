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
              <input className="SFinput" type="text" placeholder="Phone Number" />
              <input className="SFinput" type="text" placeholder="Email" />
              <input className="SFinput" type="text" placeholder="Book Service" />
              <button className="SFbutton" type="submit">Book an appointment</button>
              <a className="SFconsultation" href="">Or book an Online Consultaion</a>
            </form>
          </div>

          <div className="location">
            <div className="contactHeading">Our Location</div>
          </div>

          <div className="serviceCardContact">
                <div className="SCC"><Image src={phone}/><span>+91 9990363087</span></div>
                <div className="SCC"><Image src={mail}/><span>email@gmail.com</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

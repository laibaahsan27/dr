import React from "react";
import "./booking.css";
import Nav from "@/components/Nav/Nav";

const page = () => {
  return (
    <div>
      <Nav />
      <div className="booking-heading">
        <p>Book An Appointment</p>
        <p>
          Welcome to Our Appointment Booking Page. We are delighted to assist
          you in scheduling your appointment with us. To ensure the best
          experience, kindly let us know if you'd like to book an onsite or
          online consultation.
        </p>
      </div>
      <div className="booking-main">
        <div className="booking-main-left">
            <p className="left-heading">
                ONLINE CONSULTATION
            </p>
        </div>
        <div className="booking-main-right"></div>
      </div>
    </div>
  );
};

export default page;

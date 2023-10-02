import React from "react";
import "./booking.css";
import Nav from "@/components/Nav/Nav";
import TextField from "@mui/material/TextField";
import Foot from "@/components/Footer/Footer";

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
          <p className="left-heading">ONLINE CONSULTATION</p>
          <p className="left-h">
            If you prefer an online consultation, we're happy to offer you a
            convenient virtual appointment.
          </p>
          <div className="left-form">
            <form>
              <TextField
                name="fullName"
                className="SFinput"
                id="standard-basic"
                placeholder="Full Name"
                label="Full Name"
                variant="standard"
                // value={formData.fullName}
                // onChange={handleFormChange}
              />
              <TextField
                name="MobileNumber"
                className="SFinput"
                id="standard-basic"
                placeholder="Mobile Number"
                label="Mobile Number"
                variant="standard"
                // value={formData.fullName}
                // onChange={handleFormChange}
              />
               <TextField
                name="email"
                className="SFinput"
                id="standard-basic"
                placeholder="Email"
                label="Email"
                variant="standard"
                // value={formData.email}
                // onChange={handleFormChange}
              />
            </form>
          </div>
        </div>
        <div className="booking-main-right">
          <p className="right-heading">ONSITE CONSULTATION</p>
          <p className="right-h">
            For an in-person consultation, please provide us with a few details
            by filling out the form below.
          </p>
          <div className="left-form">
            <form>
              <TextField
                name="fullName"
                className="SFinput"
                id="standard-basic"
                placeholder="Full Name"
                label="Full Name"
                variant="standard"
                // value={formData.fullName}
                // onChange={handleFormChange}
      
              />
              <TextField
                name="MobileNumber"
                className="SFinput"
                id="standard-basic"
                placeholder="Mobile Number"
                label="Mobile Number"
                variant="standard"
                // value={formData.fullName}
                // onChange={handleFormChange}
              />
               <TextField
                name="email"
                className="SFinput"
                id="standard-basic"
                placeholder="Email"
                label="Email"
                variant="standard"
                // value={formData.email}
                // onChange={handleFormChange}
              />
            </form>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default page;

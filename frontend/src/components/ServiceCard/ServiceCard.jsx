"use client";
import React, { useState } from "react";
import "./serviceCard.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const ServiceCard = () => {
  const [service, setService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/submit", {
        ...formData,
        selectedService: service,
      })

      console.log("Form submission response:", response.data);
      const msg= response.data.message;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

 

  return (
    <>
      <div className="contactNow">
        <div className="contactNowInner">
          <div className="contactHeading">CONTACT NOW</div>

          <div className="serviceForm">
            <form className="serviceFormInner" onSubmit={handleSubmit}>
              <TextField
                name="fullName"
                className="SFinput"
                id="standard-basic"
                placeholder="Full Name"
                label="Full Name"
                variant="standard"
                value={formData.fullName}
                onChange={handleFormChange}
              />
              <TextField
                name="phoneNumber"
                className="SFinput"
                id="standard-basic"
                placeholder="Phone Number"
                label="Phone Number"
                variant="standard"
                value={formData.phoneNumber}
                onChange={handleFormChange}
              />
              <TextField
                name="email"
                className="SFinput"
                id="standard-basic"
                placeholder="Email"
                label="Email"
                variant="standard"
                value={formData.email}
                onChange={handleFormChange}
              />
              <FormControl sx={{ width: "100%" }} className="s4">
                <InputLabel id="demo-simple-select-label">Services</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={service}
                  label="Services"
                  onChange={handleServiceChange}
                >
                  <MenuItem value={"Anti-ageing Procedures"}>
                    Anti-ageing Procedures
                  </MenuItem>
                  <MenuItem value={"Chemical Peel Treatment"}>
                    Chemical Peel Treatment
                  </MenuItem>
                  <MenuItem value={"Skin Concerns"}>Skin Concerns</MenuItem>
                  <MenuItem value={"Makeover"}>Makeover</MenuItem>
                  <MenuItem value={"Skin Maintenance"}>
                    Skin Maintenance
                  </MenuItem>
                  <MenuItem value={"Body Treatments"}>Body Treatments</MenuItem>
                  <MenuItem value={"Hair Concerns"}>Hair Concerns</MenuItem>
                </Select>
              </FormControl>
              <button className="SFbutton" type="submit">
                Book an Appointment
              </button>
              <a className="SFconsultation" href="">
                Or book an Online Consultaion
              </a>
            </form>
          </div>

          <div className="location">
            <div className="contactHeading contactLoc">OUR LOCATION</div>
            <div className="maps">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.839966358022!2d77.10396117613342!3d28.48436579079244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195ade43d93d%3A0x5f39f707c70f7dc1!2sDr%20Ritesh%20Anand!5e0!3m2!1sen!2sin!4v1692439619117!5m2!1sen!2sin"
                width="372"
                height="200"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

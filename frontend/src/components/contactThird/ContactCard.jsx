"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./contactCard.css";
import axios from "axios";

const ContactCard = () => {
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
      <div className="CCcover">
        <div className="ccHeading">
          Contact us today to take the first step towards a more youthful and
          radiant you
        </div>
        <div className="ccInner">
          <div>
            <form className="ccInput" onSubmit={handleSubmit}>
              <TextField
                className="SFinput s1"
                id="standard-basic"
                placeholder="Full Name"
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
                value={formData.fullName}
                onChange={handleFormChange}
                name="fullName"
              />
              <TextField
                className="SFinput s2"
                id="standard-basic"
                placeholder="Phone Number"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
                value={formData.phoneNumber}
                onChange={handleFormChange}
                name="phoneNumber"
              />
              <TextField
                className="SFinput s3"
                id="standard-basic"
                placeholder="Email"
                label="Email"
                sx={{ width: "100%" }}
                variant="standard"
                value={formData.email}
                onChange={handleFormChange}
                name="email"
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
              <div className="boa s5">
                <button className="SFbutton bhbh" type="submit">
                  Book an Appointment
                </button>
                <br />
                <a className="SFconsultation bhbh bgb" href="">
                  Or book an Online Consultaion
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

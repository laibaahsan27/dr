
"use client";
import "./appointment.css";
import Image from "next/image";
import React, { useState } from "react";
import clinic from "../../images/clinic.svg";
import axios from "axios";

export default function appointment() {
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
    <div className="bookA">
      <div className="bookForm">
      <div className="contnow">contact now</div>
      <form onSubmit={handleSubmit}>
        <input className="bookInput" type="text" placeholder="Full Name" value={formData.fullName}
                onChange={handleFormChange} name="fullName"  />
        <input className="bookInput" type="text" placeholder="Mobile Number" name="phoneNumber" value={formData.phoneNumber}
                onChange={handleFormChange} />
        <input className="bookInput" type="text" placeholder="Email" name="email" value={formData.email}
                onChange={handleFormChange}/>

        <select className="form-select-laiba" name="Services" id="" onChange={handleServiceChange} value={service}  >
        <option value="Services">Services</option>
          <option value={"ANTI-AGEING PROCEDURES"}>ANTI-AGEING PROCEDURES</option>
          <option value={"CHEMICAL PEEL TREATMENT"}>
            CHEMICAL PEEL TREATMENT
          </option>
          <option value={"SKIN CONCERNS"}>SKIN CONCERNS</option>
          <option value={"MAKEOVER"}>MAKEOVER</option>
          <option value={"SKIN MAINTENANACE"}>SKIN MAINTENANACE</option>
          <option value={"SKIN CONCERNS"}>SKIN CONCERNS</option>
          <option value={"HAIR TREATMENTS"}>HAIR TREATMENTS</option>
        </select>

        <button className="bookBtn2" type="submit">Book an appointment</button>
        </form>
      </div>
      <div className="bookAdiv2">
        <div className="bookATxt">Book your Appointment </div>
        <div className="bookASpan">
          We look forward to serving you and helping you achieve your aesthetic
          goals. Thank you for choosing our practice.
        </div>
        <Image className="bookAclinic" src={clinic} alt="" />
      </div>
    </div>
  );
}

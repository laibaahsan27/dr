import "./appointment.css";
import Image from "next/image";
import React, { useState } from "react";
import clinic from "../../images/clinic.svg";

export default function appointment() {
  const [value, setValue]=useState('')
  function handleSelect(event){
    setValue(event.target.value)
  }
  return (
    <div className="bookA">
      <div className="bookForm">
        <input className="bookInput" type="text" placeholder="Full Name" />
        <input className="bookInput" type="text" placeholder="Mobile Number" />
        <input className="bookInput" type="text" placeholder="Email" />

        <select className="form-select-laiba" name="Services" id="" onChange={handleSelect} autocomplete="off" defaultValue="Services">
        <option value="" disabled>Services</option>
          <option value="ANTI-AGEING PROCEDURES">ANTI-AGEING PROCEDURES</option>
          <option value="CHEMICAL PEEL TREATMENT">
            CHEMICAL PEEL TREATMENT
          </option>
          <option value="SKIN CONCERNS">SKIN CONCERNS</option>
          <option value="MAKEOVER">MAKEOVER</option>
          <option value="AKIN MAINTENANACE">AKIN MAINTENANACE</option>
          <option value="SKIN CONCERNS">SKIN CONCERNS</option>
          <option value="HAIR TREATMENTS">HAIR TREATMENTS</option>
        </select>

        {/* <input className="bookInput" type="text" placeholder="Book service" /> */}
        {/* <input
            className="bookInput"
            type="text"
            placeholder="Date and time"
          /> */}
        <button className="bookBtn2">Book an appointment</button>
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

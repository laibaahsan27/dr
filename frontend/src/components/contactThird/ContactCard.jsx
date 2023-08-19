"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./contactCard.css";

const ContactCard = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            <form className="ccInput" action="">
              <TextField
                className="SFinput s1"
                id="standard-basic"
                placeholder="Full Name"
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                className="SFinput s2"
                id="standard-basic"
                placeholder="Phone Number"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <TextField
                className="SFinput s3"
                id="standard-basic"
                placeholder="Email"
                label="Email"
                sx={{ width: "100%" }}
                variant="standard"
              />
              <FormControl sx={{ width: "100%" }} className="s4">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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

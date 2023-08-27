"use client";
import React, { useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.status === 200) {
      const token = data.auth;
      localStorage.setItem("adminToken", token); // Store the JWT token in localStorage
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <>
    <div className="loginCover">
      <h1 className="LoginHeading">Admin Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            placeholder="Username"
            label="Username"
            variant="standard"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            sx={{ width: "100%", marginBottom: "20px" , color: "white" }}
            id="standard-basic"
            placeholder="Password"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button sx={{ width: "100%",backgroundColor:'#C36386' }} variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
      <p>{message}</p>
    </div>
    </>
  );
};

export default AdminLoginPage;

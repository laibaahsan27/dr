"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const page = () => {

  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin';
    }
  }, []);

  const getServiceRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getservicerequest');
      console.log(response.data);
      setServiceRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <button onClick={getServiceRequests}>getServiceRequests</button>
      {
        serviceRequests.map((serviceRequest) => (
          <div key={serviceRequest._id}>
            <h1>{serviceRequest.fullName}</h1>
            <h1>{serviceRequest.phoneNumber}</h1>
            <h1>{serviceRequest.email}</h1>
            <h1>{serviceRequest.selectedService}</h1>
          </div>
        ))
      }
    </>
  )
}

export default page
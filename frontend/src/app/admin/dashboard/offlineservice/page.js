'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './OflineService.css'; // Import your CSS file

const Page = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    getServiceRequests();
  }, []);

  const getServiceRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getservicerequest');
      console.log(response.data);
      setServiceRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='ofsHeading'>OFFLINE SERVICE REQUESTS</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Selected Service</th>
            <th>Date and Time</th> {/* Add a new column */}
          </tr>
        </thead>
        <tbody>
          {serviceRequests.map((serviceRequest) => (
            <tr key={serviceRequest._id}>
              <td>{serviceRequest.fullName}</td>
              <td>{serviceRequest.phoneNumber}</td>
              <td>{serviceRequest.email}</td>
              <td>{serviceRequest.selectedService}</td>
              <td>
                {new Date(serviceRequest.createdAt).toLocaleString()} {/* Format date and time */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;

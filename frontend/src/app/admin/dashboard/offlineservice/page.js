'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './OflineService.css'; // Import your CSS file

const Page = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter service requests based on the search query
  const filteredServiceRequests = serviceRequests.filter((serviceRequest) =>
    serviceRequest.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className='ofsHeading'>OFFLINE SERVICE REQUESTS</h1>

      {/* Add the search input field */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Selected Service</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredServiceRequests.map((serviceRequest) => (
            <tr key={serviceRequest._id}>
              <td>{serviceRequest.fullName}</td>
              <td>{serviceRequest.phoneNumber}</td>
              <td>{serviceRequest.email}</td>
              <td>{serviceRequest.selectedService}</td>
              <td>
                {new Date(serviceRequest.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;

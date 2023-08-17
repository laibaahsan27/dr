import React from 'react';
import "./ServiceHeading.css";

const ServiceHeading = ({ heading, content }) => {
  return (
    <>
    <div className='outerBg'>
      <div className="outerS" id={1}>
        <div className="topHead">{heading}</div>
        <div className="topTxt">{content}</div>
      </div>
    </div>
    </>
  );
}

export default ServiceHeading;
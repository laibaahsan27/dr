import React from 'react';
import "./ServiceText.css";

const ServiceText = (props) => {
  const { list2 } = props; // Destructure the list2 prop

  return (
    <div className="serviceData">
      <div className="dataInner">
        {list2.map((item) => { // Use 'item' instead of 'list2' as the parameter
          return (
            <div key={item.id}> {/* Add a unique key for each mapped element */}
              <div className="serviceDataHeading">{item.heading}</div>
              <div className="serviceDataContent">{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceText;

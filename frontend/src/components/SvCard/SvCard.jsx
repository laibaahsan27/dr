import React from "react";
import "./SvCard.css";
const SvCard = (props) => {
  const { list3 } = props;
  return (
    <div className="sv">
    
      {list3.map((item) => {
        return (
          <div key={item.id} className="sv-P">
            <div className="svCard">
              <div className="svCardContent">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SvCard;

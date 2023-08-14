import React from 'react'
import './Cards.css'
import Image from "next/image";
import img1 from "../../images/card1img.svg";
import img2 from "../../images/card2img.svg";
import img3 from "../../images/card3img.svg";
import img4 from "../../images/card4img.svg";
import img5 from "../../images/card5img.svg";
import img6 from "../../images/card6img.svg";
import cardhead from "../../images/andTreatments.svg"

export default function Cards() {
    const list3 = [
        {
          id: 1,
          text: "Laser Hair Reduction",
          image: img1,
        },
        {
          id: 2,
          text: "PRP Therapies",
          image: img2,
        },
        {
          id: 3,
          text: "Botox or fillers",
          image: img3,
        },
        {
          id: 4,
          text: "Hair Transplant",
          image: img4,
        },
        {
          id: 5,
          text: "Non surgical facelift",
          image: img5,
        },
        {
          id: 6,
          text: "Customized Treatment",
          image: img6,
        },
      ];
  return (
    <div>
      <div>
        <div className="cardHead" ><Image src={cardhead} alt="" /></div>
        <div className="cardsCON" >
          {list3.map((list3) => {
            return (
              <div className="outerLIST3" key={list3.id}>
                {/* <div> */}
                  <div className="cardsTxt">{list3.text}</div>
                  <Image className="cardsImg" src={list3.image} alt="" />
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}

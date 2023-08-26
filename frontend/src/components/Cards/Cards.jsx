import React from "react";
import "./Cards.css";
import Image from "next/image";
// import img1 from "../../images/card1img.svg";
// import img2 from "../../images/card2img.svg";
// import img3 from "../../images/card3img.svg";
// import img4 from "../../images/card4img.svg";
// import img5 from "../../images/card5img.svg";
// import img6 from "../../images/card6img.svg";
import cardhead from "../../images/andTreatments.svg";
import cardheadphone from "../../images/andTreatmentsPhone.svg";
import img1 from '../../images/card1img.svg'
import img1h from '../../images/card1txt.svg'

import img2 from '../../images/card2img.svg'
import img2h from '../../images/card2txt.svg'

import img3 from '../../images/card3img.svg'
import img3h from '../../images/card3txt.svg'

import img4 from '../../images/card4img.svg'
import img4h from '../../images/card4txt.svg'

import img5 from '../../images/card5img.svg'
import img5h from '../../images/card5txt.svg'

import img6 from '../../images/card6img.svg'
import img6h from '../../images/card6txt.svg'

import HoverImage from './hover'

export default function Cards() {
  const list3 = [
    {
      id: 1,
      image: img1,
      hover: img1h,
      a: '/service2',
    },
    {
      image: img2,
      hover: img2h,
      a: '/service6',

    },
    {
      id: 3,
      image: img3,
      hover: img3h,
      a: '',

    },
    {
      id: 4,
      image: img4,
      hover: img4h,
      a: '/service6',

    },
    {
      id: 5,
      image: img5,
      hover: img5h,
      a: '/service1',

    },
    {
      id: 6,
      image: img6,
      hover: img6h,
      a: '',

    },
  ];
  return (
    <div>
      <div>
        <div className="cardHead">
          <div className="awardsHEADINDCONT">
            <span className="awardsANDT">&</span>
            <div className="AADIVT">
              <span className="awardsACHT">TREATMENTS</span>
              <span className="awardsACHT"> SERVICES</span>
            </div>
          </div>
        </div>

        <div className="cardsCON">
          {list3.map((list3) => {
            return (
              <div className="outerLIST3" key={list3.id}>
                <a href={list3.a}>
                <HoverImage className="cards" defaultImg={list3.image} hoverImg={list3.hover} height={250} width={300} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

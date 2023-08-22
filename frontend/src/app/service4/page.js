import React from "react";
import "./css.css";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import image from "../../images/sv4.png";
import ServiceText from "@/components/ServiceText/ServiceText";
import List from "@/components/List/List";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import Nav from '@/components/NavService/NavService'
import Appointment from "@/components/appointment/appointment";

export default function page() {
  const list = [
    {
      id: 1,
      heading: "Chemical Peel Treatments",
      content:
        "We understand that each individual's skin is unique and may require specialized treatments to address specific concerns. We are dedicated to providing tailored solutions for various skin issues, helping you achieve a flawless and radiant complexion. Explore our range of sub treatments, each designed to target specific concerns and enhance your skin's health and beauty.",
    },
  ];
  const list2 = [
    {
      id: 1,
      heading: "What are Chemical Peels?",
      content:
        "Chemical peels are non-invasive treatments that involve the application of a chemical solution to the skin. This solution exfoliates the outer layer of the skin, stimulating cell turnover and promoting the growth of new, healthy skin. As a result, chemical peels can effectively address a wide range of skin issues, including fine lines, wrinkles, sun damage, uneven texture, acne scars, and hyperpigmentation.",
    },
  ];
  const list3 = [
    {
      id: 1,
      content:
        "Improved Skin Texture: Chemical peels exfoliate the skin, leading to a smoother and more even texture.",
    },
    {
      id: 2,
      content:
        "Minimized Fine Lines and Wrinkles: Chemical peels can reduce the appearance of fine lines and wrinkles, promoting a youthful complexion.",
    },
    {
      id: 3,
      content:
        "Diminished Hyperpigmentation: Uneven skin tone and hyperpigmentation caused by sun damage or melasma can be effectively treated with chemical peels.",
    },
    {
      id: 4,
      content:
        "Reduced Acne and Acne Scars: Chemical peels can help clear acne-prone skin and improve the appearance of acne scars.",
    },
    {
      id: 5,
      content:
        "Enhanced Collagen Production: Chemical peels stimulate collagen production, leading to firmer and more elastic skin.",
    },
    {
      id: 6,
      content:
        "Brighter and Radiant Skin: The exfoliation process reveals a fresh layer of skin, resulting in a brighter and more radiant complexion.",
    },
    {
      id: 7,
      content:
        "Quick and Convenient: Chemical peels are generally quick procedures, allowing you to resume your regular activities shortly after treatment.",
    },
  ];

  return (
    <div>
      <Nav/>
      {/* {list.map((list) => {
        return (
          <div className="outerS" id={list.id}>
            <div className="topHead">{list.heading}</div>
            <div className="topTxt">{list.content}</div>
          </div>
        );
      })} */}
      <ServiceHeading heading={list[0].heading} content={list[0].content} />
      <div className="serviceCover">
        <div className="serviceSection1">
          <div className="imageService">
            <Image className="serviceCoverImage" src={image} alt="" />
          </div>
          <ServiceText list2={list2} />
          <div className="serviceDataHeading serviceData " style={{alignItems:'normal'}}>Benefits of Chemical Peels</div>
          <List list={list3} />
        </div>

        <div className="servicePagesCard">
          <ServiceCard />
        </div>
        <div className="servicePagesCardPhone">
          <Appointment />
        </div>
      </div>
    </div>
  );
}

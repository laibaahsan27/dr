"use client";
import React, { useEffect, useState } from "react";
import "./css.css";
import Image from "next/image";
import lip from "../../images/Rectangle 49.svg";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import ServiceText from "@/components/ServiceText/ServiceText";
import SvCard from "@/components/SvCard/SvCard";
import mobile from "../../images/sv5-m.png";
import Nav from '@/components/NavService/NavService'
import Appointment from "@/components/appointment/appointment";
export default function page() {
  // const windowWidth = window.innerWidth;
  // const IMG = windowWidth > 768 ? lip : mobile;

  const [final, setFinal] = useState(lip);
  const list = [
    {
      id: 1,
      heading: "Skin Maintenance",
      content:
        "We believe that regular skin maintenance is essential to achieve and maintain a healthy, glowing complexion. Our comprehensive range of skin maintenance treatments is designed to address various concerns and keep your skin looking its best.",
    },
  ];
  const list2 = [
    {
      id: 1,
      heading: "Aquaoxy Facial",
      content:
        "Indulge in our Aquaoxy Facial, a refreshing and oxygenating treatment that hydrates and rejuvenates your skin from within. This invigorating facial stimulates circulation, detoxifies, and infuses essential nutrients, leaving you with a radiant and revitalized complexion.",
    },
    {
      id: 2,
      heading: "Hydrafacial",
      content:
        "Treat your skin to a Hydrafacial, a multi-step treatment that cleanses, exfoliates, and hydrates your skin. It also includes extractions to remove impurities, leaving your skin refreshed and radiant.",
    },
    {
      id: 3,
      heading: "Body Polishing",
      content:
        "Indulge in our luxurious body polishing treatment, a gentle exfoliation that removes dead skin cells and impurities. The result is soft, smooth, and glowing skin all over your body.",
    },
  ];
  const list3 = [
    {
      id: 1,
      content: "Enhances Skin Radiance",
    },
    {
      id: 2,
      content: "Diminishes Fine Lines",
    },
    {
      id: 3,
      content: "Boosts Collagen Production",
    },
    {
      id: 4,
      content: "Hydrates and Replenishes",
    },
  ];
  const list4 = [
    {
      id: 3,
      heading: "MESO GLOW",
      content:
        "Meso Glow is a revolutionary and highly effective facial treatment that utilizes micro-injections to infuse the skin with a customized blend of vitamins, minerals, antioxidants, and hyaluronic acid. This nourishing cocktail of essential nutrients penetrates the deeper layers of the skin, promoting a radiant and glowing complexion from within.",
    },
  ];
  const list5 = [
    {
      id: 1,
      heading: "SEMI-PERMANENT MAKEUP",
      content:
        "Our semi-permanent makeup solutions offer a low-maintenance and long-lasting way to enhance your features. Whether it's perfectly shaped eyebrows, defined eyeliner, or luscious lips, our skilled technicians create natural-looking results tailored to your preferences.",
    },
    {
      id: 2,
      bold:'BB Glow:',
      content:
        "Experience the benefits of BB Glow, a specialized treatment that combines microneedling with skin-colored pigments, providing a natural-looking foundation-like coverage to even out skin tone and camouflage imperfections. BB Glow is not a replacement for traditional makeup, but it offers an excellent option for those seeking a more even complexion without the need for heavy makeup.",
    },
  ];
  return (
    <div>
      <Nav/>
      <ServiceHeading heading={list[0].heading} content={list[0].content} />
      <div className="serviceCover">
        <div className="serviceSection1">
          <div className="imageService">
            <Image className="serviceCoverImage" src={final} alt="" />
          </div>
          <ServiceText list2={list4} />
          <div className="sv-heading">KEY BENEFITS</div>

          <SvCard list3={list3} />
          
          <ServiceText list2={list5} style={true} />
          <ServiceText list2={list2} />
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

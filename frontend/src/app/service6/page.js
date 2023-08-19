import React from "react";
import "./css.css";
import Image from "next/image";
import hair from "../../images/Rectangle 49.png";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import ServiceText from "@/components/ServiceText/ServiceText";
import Nav from '@/components/Nav/Nav'
export default function page() {
  const list = [
    {
      id: 1,
      heading: "Hair treatments",
      content:
        "We understand the importance of healthy and beautiful hair in enhancing your overall appearance and confidence. Our comprehensive hair treatment solutions are designed to address various hair concerns and provide effective solutions for hair restoration and rejuvenation. Explore our hair treatment options below to discover how we can help you achieve your hair goals.",
    },
  ];

  const list2 = [
    {
      id: 1,
      heading: "PRP (Platelet-Rich Plasma) Treatment for Hair",
      content:
        "PRP hair treatment is a cutting-edge and non-surgical procedure that utilizes the healing properties of your own blood to stimulate hair growth. The procedure involves drawing a small amount of your blood, separating the platelet-rich plasma, and then injecting it into the scalp. The growth factors in PRP help nourish hair follicles, promoting natural hair regrowth and improving hair thickness and density.",
    },
    {
      id: 2,
      heading: "Hair Transplant",
      content:
        "For those with advanced hair loss or balding, hair transplant is a surgical hair restoration option. During the procedure, hair follicles are harvested from the donor area (typically the back of the scalp) and transplanted to the thinning or balding areas. The transplanted hair grows naturally and permanently, providing a natural and permanent solution for hair loss.",
    },
    {
      id: 3,
      heading: "Mesotherapy for Hair",
      content:
        "Mesotherapy is a minimally invasive treatment that involves injecting a specialized blend of vitamins, minerals, amino acids, and growth factors into the scalp. This nutrient-rich cocktail revitalizes and strengthens the hair follicles, encouraging hair growth and reducing hair loss. Mesotherapy is a versatile treatment that can be tailored to address various hair conditions and provide long-lasting results.",
    },
  ];

  return (
    <>
    <Nav/>
      <ServiceHeading heading={list[0].heading} content={list[0].content} />
      <div className="serviceCover">
        <div className="serviceSection1">
          <div className="imageService">
            <Image className="serviceCoverImage" src={hair} alt="" />
          </div>

          <ServiceText list2={list2}/>
        </div>

        <div className="servicePagesCard">
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

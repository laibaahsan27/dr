import React from "react";
import Nav from "@/components/NavService/NavService";
import Foot from "@/components/Footer/Footer";
import ContactCard from "@/components/contactThird/ContactCard";
import AboutA from "@/components/aboutA/AboutA";
import AboutB from "@/components/AboutB/AboutB";
import AboutImages from "@/components/AboutImages/AboutImages";

export default function page() {
  return (
    <>
      <Nav />
      <AboutA />
      {/* <AboutB/> */}
      <AboutImages />
      <ContactCard />
      <Foot />
    </>
  );
}

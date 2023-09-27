import React from "react";
import Nav from "@/components/NavService/NavService";
import Foot from "@/components/Footer/Footer";
import ContactCard from "@/components/contactThird/ContactCard";
import AboutA from "@/components/aboutA/aboutA";
import AboutB from "@/components/AboutB/AboutB";

export default function page() {
  return (
    <>
      <Nav />
      <AboutA />
      <AboutB/>
      <ContactCard />
      <Foot />
    </>
  );
}

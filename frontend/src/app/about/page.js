import React from "react";
import Nav from "@/components/NavService/NavService";
import Foot from "@/components/Footer/Footer";
import ContactCard from "@/components/contactThird/ContactCard";

export default function page() {
  return (
    <>
      <Nav />
          <ContactCard />
      <Foot />
    </>
  );
}

import React from "react";
import "./css.css";
import Image from "next/image";
import lip from "../../images/servicepage7.png";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import ServiceText from "@/components/ServiceText/ServiceText";
import Nav from '@/components/NavService/NavService'
import Appointment from "../../components/appointment/appointment.jsx";
import Foot from "@/components/Footer/Footer";


export default function page() {
  const list = [
    {
      id: 1,
      heading: "Makeover",
      content:
        "we understand that your wedding day is one of the most special moments in your life. Our hair treatment options are specially curated to make sure that both the bride and groom look their best on their big day. From semi-permanent makeup for the bride and groom to microblading/micropigmentation and lip coloring, we offer a range of services to enhance your natural beauty and make your wedding day truly memorable.",
    },
  ];

  const list2 = [
    {
      id: 1,
      heading: "Semi-Permanent Makeup for Bride and Groom",
      content:
      "Our semi-permanent makeup services for brides and grooms are designed to create a flawless and long-lasting look that enhances your features and complements your wedding attire. Whether it's perfectly defined eyebrows, well-shaped lips, or subtly accentuated eyes, our skilled technicians use advanced techniques to achieve stunning and natural-looking results. Semi-permanent makeup eliminates the need for constant touch-ups during the festivities, ensuring you look picture-perfect throughout the day."
    },
    {
      id: 2,
      heading: "Lip Coloring",
      content:
        "Lip coloring is an ideal option for brides and grooms who want to enhance the appearance of their lips without the need for constant reapplication of lipstick. Our lip coloring technique uses specialized pigments to add subtle color and definition to your lips, giving you beautifully tinted lips that last throughout the wedding festivities.",
    },
    {
      id: 3,
      heading: "Micropigmentation",
      content:
        "Microblading and micropigmentation are innovative techniques for achieving beautifully shaped and defined eyebrows. Our expert artists use precise microblades or specialized pigments to create natural-looking hair-like strokes that mimic real eyebrows. Whether you want to fill in sparse areas, reshape your brows, or add fullness, microblading/micropigmentation offers a semi-permanent solution for flawless brows on your wedding day and beyond.",
    },
  ];

  return (
    <>
      <Nav/>
      <ServiceHeading heading={list[0].heading} content={list[0].content} />
      <div className="serviceCover">
        <div className="serviceSection1">
          <div className="imageService">
            <Image className="serviceCoverImage" src={lip} alt="" />
          </div>

          <ServiceText list2={list2}/>

        </div>
        
        <div className="servicePagesCard">
          <ServiceCard />
        </div>
        <div className="servicePagesCardPhone">
          <Appointment />
        </div>
      </div>
      <Foot/>
    </>
  );
}

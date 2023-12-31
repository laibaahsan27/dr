import Image from "next/image";
import "./css.css";
import ONE from "../../images/service1img.svg";
import ServiceText from "@/components/ServiceText/ServiceText";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import Nav from '@/components/NavService/NavService'
import TWO from '../../images/facenumbers.svg'
import Foot from "@/components/Footer/Footer";
import Appointment from "../../components/appointment/appointment.jsx";
export default function page() {
  const list = [
    {
      id: 1,
      heading: "Anti - Ageing Procedures",
      content:
        "We offer a range of advanced and effective anti-ageing treatments that help you restore youthful vitality and rejuvenate your appearance. Discover the transformative power of our anti-ageing procedures and embark on a journey to renewed confidence and radiance.",
    },
  ];
  const list2 = [
    {
      id: 1,
      heading: "PRP WITH MICRONEEDLING",
      content:
        "Our PRP (Platelet-Rich Plasma) treatment, combined with microneedling, harnesses your body's natural growth factors to stimulate collagen production and rejuvenate your skin. It's a safe and effective way to achieve a youthful and radiant glow.",
    },
    {
      id: 2,
      heading: "Non-surgical Lift",
      content:
        "Experience the benefits of our non-surgical face-lift, a safe and non-invasive alternative to traditional surgical procedures. Our comprehensive approach combines various treatments to lift and tighten sagging skin, smooth fine lines and wrinkles, and restore facial volume.",
    },
  ];
  const list3 = [
    {
      id: 1,
      heading: "Mesobotox",
      content:
        "Mesobotox is a cutting-edge technique that targets specific areas of the face with micro-injections of diluted botulinum toxin. It helps reduce pore size, improve skin texture, and deliver a fresh and radiant complexion. This innovative treatment also provides a subtle lift and smoother appearance, making it an excellent option for those seeking a natural-looking enhancement.",
    },
    {
      id: 2,
      heading: "Hifu",
      content:
        "HIFU is a safe and non-invasive procedure, allowing for a convenient treatment experience without any incision or downtime. The focused ultrasound energy precisely targets specific areas, effectively rejuvenating the skin's foundation and promoting gradual skin tightening over time. With its FDA-approved status, HIFU is trusted by professionals and patients alike as an effective solution for achieving a more youthful and lifted appearance without the risks associated with surgery. Enjoy the benefits of a natural-looking and refreshed complexion, making HIFU an ideal choice for those seeking long-lasting results.",
    },
  ];
  const list4 = [
    {
      id: 1,
      heading: "Microneedling",
      content:
        "Rejuvenate your skin with microneedling, a minimally invasive procedure that stimulates collagen production, improving texture, tone, and reducing fine lines, wrinkles, and scars for smoother and more youthful-looking skin. Experience the transformative power of this treatment in achieving a radiant and revitalized complexion.",
    },
    {
      id: 2,
      heading: "Radiofrequency ",
      content:
        "Experience the benefits of RF treatments, utilizing controlled heat energy to tighten and lift the skin. Stimulate collagen production for firmer, more youthful skin without surgery or downtime, revealing a revitalized and rejuvenated appearance.",
    },
    {
      id: 3,
      heading: "Ultherapy",
      content:
        "Ultherapy is a safe and non-invasive procedure, allowing for a convenient treatment experience without the need for incisions or downtime. The focused ultrasound energy precisely targets specific areas, effectively rejuvenating the skin's foundation and promoting gradual skin tightening over time. Enjoy the benefits of a natural-looking and refreshed complexion, making Ultherapy an ideal choice for those seeking long-lasting results.",
    },
    {
      id: 4,
      heading: "Aqua gold",
      content:
        "Experience the rejuvenating effects of Aqua Gold, a cutting-edge gold stamp micro-needling treatment combined with the infusion of customized serums. This innovative procedure not only revitalizes the skin but also addresses specific concerns, improving tone, texture, and overall skin health. Aqua Gold's unique delivery system allows for deeper penetration of potent serums, resulting in a radiant and glowing complexion.",
    },
    {
      id: 5,
      heading: "Exillis",
      content:
        "Exilis, a non-invasive radiofrequency treatment, offers a comprehensive solution for skin contouring, skin tightening, fat reduction, and cellulite improvement. The advanced technology precisely targets problem areas, stimulating collagen production and promoting a smoother and firmer skin texture. With Exilis, you can achieve your desired  face contouring and body contouring and enhance your natural beauty without surgery or downtime. ",
    },
  ];

  return (
    <>
    <Nav/>
    <div className="service1CON">
      <ServiceHeading heading={list[0].heading} content={list[0].content} />
      <Image className="service1IMG" src={ONE} alt="" />
      <Image className="service1IMGPHONE" src={TWO} alt="" />
      <div>
        <ol className="phoneservice1list">
          <li>Forehead lines and Wrinkles</li>
          <li>Dark circles</li>
          <li>Reduce scars</li>
          <li>Smile lines</li>
          <li>Skin texture and chin wrinkles</li>
        </ol>
      </div>

      <div className="serviceCover">
        <div>
          <ServiceText list2={list2} />
          <div className="myhead">Our Non-Surgical Face-Lift Includes:</div>
          <div className="mycontent">
            <span className="filler">Fillers: </span>Using a selection of
            fillers, we enhance facial contours, restore lost volume, and reduce
            the appearance of wrinkles,sunken eyes giving your face a naturally youthful
            and refreshed look. Botox: Our
          </div>
          <div className="mycontent2">
            <span className="filler">Botox:
            </span> Treatments target dynamic wrinkles caused by repetitive facial
            movements, such as crow's feet, frown lines, and forehead wrinkles.
            It relaxes the underlying muscles, reducing the appearance of lines
            and preventing further deepening.
          </div>
          <ServiceText list2={list3} />
          <div className="whychoose">
            Why choose hifu ?
            <ul className="whychooseUL">
              <li>Lifts and tightens sagging skin</li>
              <li>Gradual and long-lasting results</li>
              <li>Suitable for various skin types</li>
              <li>Non-invasive procedure</li>
              <li>Precise targeting of specific areas</li>
              <li>Stimulates collagen production</li>
            </ul>
          </div>
          <ServiceText list2={list4} />
        </div>
        <div className="servicePagesCard">
          <ServiceCard />
        </div>
        <div className="servicePagesCardPhone">
          <Appointment />
        </div>
      </div>
    </div>
    <Foot />

    </>
  );
}

import "./css.css";
import Image from "next/image";
import ONE from "../../images/servicepage2legs.svg";
import ONEph from "../../images/legsphone.svg";
import TWO from "../../images/servicepage2chin.svg";
import THREE from "../../images/servicepage2tommy.svg";
import FOUR from "../../images/servicepage2uarms.svg";
import FIVE from "../../images/servicepage2tattoo.svg";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceText from "@/components/ServiceText/ServiceText";
import Nav from "@/components/NavService/NavService";
import Foot from "@/components/Footer/Footer";

export default function page() {
  const list = [
    {
      id: 1,
      heading: "Body Treatments",
      content:
        "We offer a range of advanced body treatments that address various concerns and help you achieve your desired body goals. We are dedicated to providing safe and effective solutions, personalized to suit your unique needs. Explore our body treatment options below to discover how we can help you look and feel your best.",
    },
  ];
  const list2 = [
    {
      id: 1,
      heading: "Double chin removal",
      content:
        "Banish the appearance of a double chin with our specialized treatment. Our advanced techniques target and eliminate stubborn fat deposits under the chin, providing a more defined and youthful jawline.",
      content2:
        "The treatments target only the unwanted fat cells, leaving surrounding tissues unharmed. Once the treated fat cells are eliminated, they are gone for good, offering long-lasting and natural-looking results.",
      content3:
        "Each individual's double chin is unique, and our experienced practitioners will create a personalized treatment plan tailored to your specific goals and anatomy.",
    },
  ];
  const list3 = [
    {
      id: 1,
      heading: "Tummy Tightening",
      content:
        "Our tummy tightening treatment utilizes innovative technologies to firm and tone the abdominal area, helping you achieve a more contoured and sculpted midsection. Say goodbye to loose skin and embrace a more defined waistline with this non-invasive and results-driven procedure.",
    },
    {
      id: 2,
      heading: "Body Polishing",
      content:
        "Indulge in our luxurious body polishing treatment, where gentle exfoliation removes dead skin cells and impurities, revealing soft and radiant skin all over your body.",
    },
  ];
  const list4 = [
    {
      id: 1,
      heading: "Underarm Darkness Treatment",
      content:
        "Say goodbye to underarm darkness with our safe and effective treatment. Our procedures target hyperpigmentation in the underarm area, resulting in lighter and even-toned skin.",
    },
    {
      id: 2,
      heading: "Excessive Sweating Treatment",
      content:
        "Combat excessive sweating with our advanced treatments that help reduce sweat production in targeted areas, providing long-lasting relief and boosting your confidence.",
    },
  ];
  const list5 = [
    {
      id: 1,
      heading: "Stretch Marks Removal",
      content:
        "Our stretch marks removal treatments utilize innovative technologies to fade and minimize the appearance of stretch marks, restoring the skin's smoothness and elasticity.",
    },
    {
      id: 2,
      heading: "Tattoo Removal",
      content:
        "Unwanted tattoos can be a thing of the past with our advanced tattoo removal techniques. Our treatments target ink pigments, gradually lightening tattoos for a clearer and blemish-free skin.",
    },
  ];

  return (
    <>
      <Nav />
      <div className="service2CON">
        <ServiceHeading heading={list[0].heading} content={list[0].content} />
        <div className="servicepage2section2">
          <div className="servicepage2imagediv">
            <Image className="legsdesktop" src={ONE} alt="" />
            <Image className="legsimg" src={ONEph} alt="" />
          </div>
          <div className="service2sec2right">
            <div className="service2headrightsec">laser hair reduction</div>
            <div className="service2secrighttxt">
              Laser hair reduction employs concentrated beams of light that
              target the hair follicles, effectively inhibiting hair growth. The
              laser's energy is absorbed by the pigment (melanin) in the hair
              follicles, damaging them and preventing further hair growth. Our
              skilled practitioners{" "}
              <span className="servicepage2sec2span">
                use state-of-the-art laser technology, which is safe for various
                skin types{" "}
              </span>{" "}
              and can target hair on different areas of the body.
            </div>
            <div className="service2secrighttxt">
              For optimal hair reduction,{" "}
              <span className="servicepage2sec2span">
                multiple treatment sessions are typically required,
              </span>{" "}
              spaced a few weeks apart.{" "}
            </div>
          </div>
        </div>
        <div className="serviceCover">
          <div className="service2Section1">
            <div className="imageService2">
              <Image className="service2CoverImage" src={TWO} alt="" />
            </div>
            {list2.map((list2) => {
              return (
                <div className="service2sec2textdiv" id={list2.id}>
                  <div className="headservice2mytxt">{list2.heading}</div>
                  <div className="textservice2mytext">{list2.content}</div>
                  <div className="textservice2mytext">{list2.content2}</div>
                  <div className="textservice2mytext">{list2.content3}</div>
                </div>
              );
            })}
            <div>
              <Image className="service2belowImage" src={THREE} alt="" />
            </div>

            <ServiceText list2={list3} />
            <div>
              <Image className="service2belowImage" src={FOUR} alt="" />
            </div>

            <ServiceText list2={list4} />
            <div>
              <Image className="service2belowImage" src={FIVE} alt="" />
            </div>

            <ServiceText list2={list5} />
          </div>

          <div className="servicePagesCard">
            <ServiceCard />
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}

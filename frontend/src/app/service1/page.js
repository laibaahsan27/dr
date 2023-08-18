import Image from "next/image";
import './css.css'
import ONE from '../../images/service1img.svg'
import ServiceText from "@/components/ServiceText/ServiceText";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

export default function page() {
const list=[
    {
        id: 1,
        heading: 'Anti - Ageing Procedures',
        content: 'We offer a range of advanced and effective anti-ageing treatments that help you restore youthful vitality and rejuvenate your appearance. Discover the transformative power of our anti-ageing procedures and embark on a journey to renewed confidence and radiance.',    
    },
];
const list2 = [
  {
    id: 1,
    heading: "PRP WITH MICRONEEDLING",
    content:
    "Our PRP (Platelet-Rich Plasma) treatment, combined with microneedling, harnesses your body's natural growth factors to stimulate collagen production and rejuvenate your skin. It's a safe and effective way to achieve a youthful and radiant glow."
  },
  {
    id: 2,
    heading: "Non-surgical Lift",
    content:
      "Experience the benefits of our non-surgical face-lift, a safe and non-invasive alternative to traditional surgical procedures. Our comprehensive approach combines various treatments to lift and tighten sagging skin, smooth fine lines and wrinkles, and restore facial volume.",
  },
];

  return (
    <div className='service1CON'>
      {list.map((list) => {
          return (
            <div className='outerS' id={list.id}>
            <div className='topHead'>{list.heading}</div>
            <div className='topTxt'>{list.content}</div>
            </div>
          );
        })}

      <Image className="service1IMG" src={ONE} alt="" />
      
    
      <div>
        <div><ServiceText list2={list2}/></div>
        <div><ServiceCard /></div>
      </div>

    </div>
  )
}

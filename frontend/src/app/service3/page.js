import Image from "next/image";
import './css.css'
import Nav from '@/components/NavService/NavService'
import Foot from "@/components/Footer/Footer";
import ServiceHeading from "@/components/ServiceHeading/ServiceHeading";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Appointment from "../../components/appointment/appointment.jsx";
import ServiceText from "@/components/ServiceText/ServiceText";
import one from '../../images/skin1.svg';
import onep from '../../images/skin1phn.svg';

import two from '../../images/skin2.svg';
import twop from '../../images/skin2phn.svg';

import three from '../../images/skin3.svg';
import threep from '../../images/skin3phn.svg';

export default function page() {
const list=[
    {
        id: 1,
        heading: 'Anti - Ageing Procedures',
        content: 'We offer a range of advanced and effective anti-ageing treatments that help you restore youthful vitality and rejuvenate your appearance. Discover the transformative power of our anti-ageing procedures and embark on a journey to renewed confidence and radiance.',    
    },
];
const list2=[
  {
      id: 1,
      heading: 'Acne Treatment',
      content: 'Our acne treatment options are designed to combat active breakouts, reduce inflammation, and prevent future acne flare-ups. We utilize advanced techniques and medical-grade products to help you achieve clear and blemish-free skin.',    
  },
  {
    id: 2,
    heading: 'Melasma Treatment',
    content: 'Combat the appearance of melasma and uneven skin tone with our specialized melasma treatment. We offer a comprehensive approach to lighten dark patches and restore a more balanced complexion.',    
},
];
const list3=[
  {
      id: 1,
      heading: 'Rosacea Treatment',
      content: `Our rosacea treatment aims to reduce redness, inflammation, and visible blood vessels associated with this skin condition. With our gentle and effective approach, we provide relief and improve your skin's overall appearance.`,    
  },
  {
    id: 1,
    heading: 'Sun and Age Spots Treatment',
    content: 'Undo the effects of sun damage and aging with our targeted treatments for sunspots and age spots. We utilize advanced technologies to fade these spots and reveal a more youthful complexion.',    
},
];
const list4=[
  {
      id: 1,
      heading: 'Under Eye Dark Circles Treatment',
      content: `Address under-eye dark circles and puffiness with our rejuvenating treatments. Our non-invasive options help reduce the appearance of tired eyes, giving you a refreshed and revitalized look.`,    
  },{
    id: 1,
    heading: 'Brown Spots & Freckles Treatment',
    content: 'Say goodbye to unwanted brown spots and freckles with our personalized treatment plans. We utilize specialized lasers and advanced techniques to minimize their appearance and promote an even skin tone.',    
},
];

  return (
    <>
    <Nav/>
    <ServiceHeading heading={list[0].heading} content={list[0].content} />
    <div className='service3CON'>
      <div>
      <div className="serv3imgdiv">
        <Image className="ser3img1" src={one} alt="" />
        <Image className="ser3img1phn" src={onep} alt="" />
      </div>
      <ServiceText list2={list2} />
      <div className="serv3imgdivdown">
        <Image className="ser3img1down" src={two} alt="" />
        <Image className="ser3img1phndown" src={twop} alt="" />
      </div>
      <ServiceText list2={list3} />
      <div className="serv3imgdivdown">
        <Image className="ser3img1down" src={three} alt="" />
        <Image className="ser3img1phndown" src={threep} alt="" />
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
    <Foot/>
    </>
  )
}

import React from 'react'
import './css.css'
import Nav from '@/components/NavService/NavService'
import Foot from "@/components/Footer/Footer";

export default function page() {
const list=[
    {
        id: 1,
        heading: 'Anti - Ageing Procedures',
        content: 'We offer a range of advanced and effective anti-ageing treatments that help you restore youthful vitality and rejuvenate your appearance. Discover the transformative power of our anti-ageing procedures and embark on a journey to renewed confidence and radiance.',    
    },
];

  return (
    <>
    <Nav/>
    <div className='service3CON'>
      {list.map((list) => {
          return (
            <div className='outerS' id={list.id}>
            <div className='topHead'>{list.heading}</div>
            <div className='topTxt'>{list.content}</div>
            </div>
          );
        })}
    </div>
    <Foot/>
    </>
  )
}

import Image from "next/image";
import './css.css'
import ONE from '../../images/service1img.svg'

export default function page() {
const list=[
    {
        id: 1,
        heading: 'Anti - Ageing Procedures',
        content: 'We offer a range of advanced and effective anti-ageing treatments that help you restore youthful vitality and rejuvenate your appearance. Discover the transformative power of our anti-ageing procedures and embark on a journey to renewed confidence and radiance.',    
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
    </div>
  )
}

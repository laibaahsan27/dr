import React from 'react'
import Image from "next/image";
import './AboutImages.css'
import AboutPageImg1 from '../../images/AboutPageImg1.svg'

const imgData=[
    {
        id: 1,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    },
    {
        id: 2,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    },
    {
        id: 3,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    },
    {
        id: 4,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    },
    {
        id: 5,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    },
    {
        id: 6,
        img: AboutPageImg1,
        text: 'Acne Scar Treatment'
    }
]

const AboutImages = () => {
  return (
    <>
        <div className="AIHeading">BEFORE & AFTER</div>
        <div className="AIimages">
            {imgData.map((item) => {
                return (
                    <div className="AIimage" key={item.id}>
                        <Image className='AIimg' src={item.img} alt="img" />
                        <span className='AItext'>{item.text}</span>
                        <span className='BA AIBF'>Before</span>
                        <span className='BA AIAF'>After</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default AboutImages
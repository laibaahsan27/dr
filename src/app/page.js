"use client";
import './globals.css'
import Image from 'next/image'
import DOC from '../images/doc.svg'
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import RIGHT from '../images/CaretRight.svg'
import RIGHTTWO from '../images/CaretRight2.svg'

export default function Home() {
  const list=[
    {
      id: 1,
      up: '40+',
      down: 'Treatments and Services'
    },{
      id: 2,
      up: '8',
      down: 'Years of Experience'
    },{
      id: 3,
      up: '96%',
      down: 'Customer Satisfaction'
    },{
      id: 4,
      up: '45+',
      down: 'Success Therapies'
    }
  ];

  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Discover  Your True  Beauty with  Expert" },
    {
      type: "heading2",
      text: "Aesthetic  Care"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <div style={{backgroundColor: '#FFF5F4'}}>
      <div className="heroCON">
        <div className='heroRightTxt'>
        Hi, I’m Dr. Akanksha Agarwal <span className='heroSpan'>PGDCC  |  B.D.S.</span>
        </div>
        <motion.div
            className="App"
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="containerL">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>

        <Image className='docImg' src={DOC} alt="" />
        <div className='textThree'>Experience   Unmatched Bliss! Pamper and Rejuvenate Your Mind, Body, and Soul</div>
        <div className='heroBTNS'>
          <button className='heroBTN1'>Book an appointment <Image className='rightIMG' src={RIGHT} alt="" /></button>
          <button className='heroBTN2'>Consult Now</button>
        </div>
        {list.map((list)=>{
        return(
          <div className='outerLIST' key={list.id}>
            <div className='setLIST'>
              <div className='listUP'>{list.up}</div>
              <div className='listDOWN'>{list.down}</div>
            </div>
          </div>
        )}
        )}
      </div>
      
      <div className='homeAbout'>
        <div className='headAbout'>ABOUT</div>
        <div className='aboutTxt'>Meet Dr. Akanksha Agarwal, a career-oriented and enthusiastic facial aesthetician with a passion for excellence. <span className='aboutTxtSpan'> Currently serving as a consultant at LA MiDAS aesthetics and visiting consultant/lecturer in One Aesthetics</span>, Gurgaon, Dr. Agarwal's expertise extends to multiple clinics in Delhi, Hyderabad, Moradabad, and Bangalore.</div>
        <div className='hover-underline-animation'>
        <a className='aboutLinkL' href="/">Learn more about me <Image className='aboutArrow' src={RIGHTTWO} alt="" /> </a>
        </div>
        
      </div>    

    </div>
  )
}

"use client";
import './Footer.css'; 
import Image from 'next/image'
import Flower from '../../images/footerFlower.svg'
import { motion } from "framer-motion";
import INSTA from '../../images/InstagramLogo.svg'
import FACEB from '../../images/FacebookLogo.svg'
import MAIL from '../../images/MailLogo.svg'

export default function Footer() {
  return (
    <div className='footerOUT'>
      <div className='footerCON'>
        <div className='footerCON1'>
        <div className='footer1'>
            <motion.div className="containerLogoFooter"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}><Image className='footerFlower' src={Flower} alt="" />
            </motion.div>Dr Akanksha <br /> Agarwal
        </div>
        </div>
        <div className='footerCON2'>
        <div>
            <ul className='footerUL'>
                <li className='headLI'>SERVICES</li>
                <li>Anti-ageing Procedures</li>
                <li>Skin Concerns</li>
                <li>Chemical Peel Treatment</li>
                <li>Skin Maintenance</li>
                <li>Body Treatments</li>
                <li>Hair Treatments</li>
                <li>Makeover</li>
            </ul>
        </div>
        <div>
            <ul className='footerUL'>
                <li className='headLI'>LOCATION</li>
                <li className='footerLI'>NR-38, First Floor</li>
                <li>NATHUPUR Road</li>
                <li>NATHUPUR Sector 24</li>
                <li>Gurugram Haryana 122002</li>
            </ul>
        </div>
        <div>
            <ul className='footerUL'>
               <li className='headLI'>CONTACT</li> 
               <li className='footerLI'>9990363087</li>
               <li><Image className='footerLOGO' src={INSTA} alt="" /><Image className='footerLOGO' src={FACEB} alt="" /><Image className='footerLOGO' src={MAIL} alt="" /></li>
            </ul>
        </div>
        </div>
        
        
      </div>
    </div>
  )
}

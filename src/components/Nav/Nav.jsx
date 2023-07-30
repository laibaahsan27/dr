"use client";
import './Nav.css'; 
import Image from 'next/image'
import { motion } from "framer-motion";
import LOGO from '../../images/logoSVG.svg'


export default function Nav() {
  return (
    <div>
      <nav className='navbar'>
        <a className="logoName" href="/">
            <motion.div className="containerLogo"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}><Image className='logoImg' src={LOGO} alt="" />
            </motion.div>
            <span className='logoNAME'>Dr Akanksha Agarwal</span>
        </a>
      </nav>
    </div>
  )
}

// "use client";
// import './Nav.css';
// import React,{useState} from 'react';
// import Image from 'next/image'
// import { motion } from "framer-motion";
// import LOGO from '../../images/logoSVG.svg'
// import Link from 'next/link'

// export default function Nav() {

//   const [isMenu, setisMenu] = useState(false);
//     const [isResponsiveclose, setResponsiveclose] = useState(false);
//     const toggleClass = () => {
//       setisMenu(isMenu === false ? true : false);
//       setResponsiveclose(isResponsiveclose === false ? true : false);
//   };
//     let boxClass = ["main-menu menu-right menuq1"];
//     if(isMenu) {
//         boxClass.push('menuq2');
//     }else{
//         boxClass.push('');
//     }
//     const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//     const toggleSubmenu = () => {
//       setMenuSubMenu(isMenuSubMenu === false ? true : false);
//     };
//     let boxClassSubMenu = ["sub__menus"];
//     if(isMenuSubMenu) {
//         boxClassSubMenu.push('sub__menus__Active');
//     }else {
//         boxClassSubMenu.push('');
//     }

//   return (
//     <div>
//       <nav className='navbar'>
//         <a className="logoName" href="/">
//             <motion.div className="containerLogo"
//                 whileHover={{ scale: 1.2, rotate: 90 }}
//                 whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}><Image className='logoImg' src={LOGO} alt="" />
//             </motion.div>
//             <span className='logoNAME'>Dr Akanksha Agarwal</span>
//         </a>
//         <div className="header__middle__menus">
//                     <nav className="main-nav " >

//                     {isResponsiveclose === true ? <>
//                         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <Image className='logoImg' src={LOGO} alt="" />   </span>
//                     </> : <>
//                         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <Image className='logoImg' src={LOGO} alt="" />   </span>
//                     </>}
//                     <ul className={boxClass.join(' ')}>
//                         <li  className="menu-item" >
//                             <Link exact activeClassName='is-active' onClick={toggleClass} href="/"> Home </Link>
//                         </li>
//                         <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' href="/"> About </Link> </li>
//                         <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link href="/"> Shop <Image className='logoImg' src={LOGO} alt="" /> </Link>
//                             <ul className={boxClassSubMenu.join(' ')} >
//                                 <li> <Link onClick={toggleClass} activeClassName='is-active'  href="/"> Online Shop </Link> </li>
//                                 <li><Link onClick={toggleClass} activeClassName='is-active' href="/"> Offline Shop </Link> </li>
//                             </ul>
//                         </li>
//                         <li className="menu-item " ><Link onClick={toggleClass} activeClassName='is-active' href="/"> Contact </Link> </li>
//                     </ul>
//                     </nav>
//                 </div>
//       </nav>
//     </div>
//   )
// }
"use client";
import "./Nav.css";
import React, { useState } from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import LOGO from "../../images/logoSVG.svg";
import RIGHT from "../../images/CaretRight.svg";
import menu from '../../images/hamburger.svg';

export default function Nav() {
  const list = [
    {
      id: 1,
      heading: "Anti-ageing Procedures",
      sub: "Non surgical face - lift , Liquid Lift , Mesobotox , Microneedling , Radiofrequency , Hifu , Ultherapy , Aqua Gold , Exillis , PRP with microneedling",
    },
    {
      id: 2,
      heading: "Chemical Peel Treatment",
    },
    {
      id: 3,
      heading: "Skin Concerns",
      sub: "Acne Treatment , Rosacea , Sun and age spots , Under eye dark circles , Brown Spots , Freckles Treatments",
    },
    {
      id: 4,
      heading: "makeover",
      sub: "Bride and groom- semipermanent makeup , Microblading, Lip coloring",
    },
    {
      id: 5,
      heading: "Skin Maintenance",
      sub: "Aquaoxy facial, Meso glow, Semi permanent make up , PRP for face, Body polishing , Hydrafacial , Oxygeneo facial , Power glow facial , Photofacial",
    },
    {
      id: 6,
      heading: "Skin Concerns",
      sub: "Tummy tightening , Double chin removal , Body polishing , Underarms darkness , Excessive sweating , Laser hair reduction, Stretch marks removal, Tattoo removal",
    },
    {
      id: 1,
      heading: "hair treatments",
      sub: "PRP Treatments , Mesotherapy, Hair transplant",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }

    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false); // Close sub-menu when main menu toggles
};

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };
  

  return (
    <div>
      <nav className="navbar">
        <a className="logoName" href="/">
          <motion.div
            className="containerLogo"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          >
            <Image className="logoImg" src={LOGO} alt="Logo" />
          </motion.div>
          <span className="logoNAME">Dr Akanksha Agarwal</span>
        </a>

        {/* Responsive Menu Button */}
        {/* <span className="menubar__button" onClick={toggleMenu}>
          <Image className="navmenuIcon" src={menu} alt="Logo" />
        </span> */}

        <div className={`menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="middleNav">
            <li className="liNav" onClick={closeMenu}>
              <a className="navBTN" href="/about">
                About
              </a>
            </li>
            <li className="liNav subMenuParent">
              <a className="navBTN" onClick={toggleSubMenu} href="#">
                Services
              </a>
              <ul className={`submenu ${isSubMenuOpen ? "active" : ""}`}>
                {list.map((item) => {
                  const subItems = item.sub ? item.sub.split(", ") : [];
                  return (
                    <React.Fragment key={item.id}>
                      <div className="subMenuDiv">
                        <li className="liNav liSubMenu" onClick={closeMenu}>
                          <a className="navMenuHead" href="#">
                            {item.heading}
                          </a>
                        </li>
                        {subItems.map((subItem, index) => (
                          <div className="subMenuItemsCon">
                            <li
                              className="liNav"
                              key={index}
                              onClick={closeMenu}
                            >
                              <a className="navMenuItems" href="#">
                                {subItem.trim()}
                              </a>
                            </li>
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  );
                })}
              </ul>
            </li>
            <li className="liNav" onClick={closeMenu}>
              <a className="navBTN" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          
        </div>
        <span className="menubar__button" onClick={toggleMenu}>
          <Image className="navmenuIcon" src={menu} alt="Logo" />
        </span>
        <button className="navABTN">Book an appointment{" "}
            <Image className="rightIMG" src={RIGHT} alt="" /></button>
      </nav>
    </div>
  );
}

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
import './Nav.css';
import React, { useState } from 'react'; 
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import LOGO from '../../images/logoSVG.svg'


export default function Nav() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
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
      <nav className='navbar'>
        <a className="logoName" href="/">
          <motion.div className="containerLogo"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}>
            <Image className='logoImg'src={LOGO} alt="Logo" />
          </motion.div>
          <span className='logoNAME'>Dr Akanksha Agarwal</span>
        </a>

        {/* Responsive Menu Button */}
        <span className="menubar__button" onClick={toggleMenu}>
          <Image className='logoImg' src="/path/to/logoSVG.svg" alt="Menu" />
        </span>

        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={closeMenu}>
              <a href="/">Home</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/about">About</a>
            </li>
            <li>
              <a onClick={toggleSubMenu} href="#">Shop</a>
              <ul className={`submenu ${isSubMenuOpen ? 'active' : ''}`}>
                <li onClick={closeMenu}>
                  <a href="/online-shop">Online Shop</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="/offline-shop">Offline Shop</a>
                </li>
              </ul>
            </li>
            <li onClick={closeMenu}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

"use client";
import "./Nav.css";
import React, { useState } from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import LOGO from "../../images/logoSVG.svg";
import RIGHT from "../../images/CaretRight.svg";
import menu from "../../images/hamburger.svg";
import tri from "../../images/Rectangle.svg";

export default function Nav() {
  // const list = [
  //   {
  //     id: 1,
  //     heading: "Anti-ageing Procedures",
  //     sub: "Non surgical face - lift , Liquid Lift , Mesobotox , Microneedling , Radiofrequency , Hifu , Ultherapy , Aqua Gold , Exillis , PRP with microneedling",
  //     heading2: "Chemical Peel Treatment",
  //   },
  // {
  //   id: 2,
  //   heading: "Chemical Peel Treatment",
  // },
  // {
  //   id: 2,
  //   heading: "Skin Concerns",
  //   sub: "Acne Treatment , Rosacea , Sun and age spots , Under eye dark circles , Brown Spots , Freckles Treatments",
  //   heading2: "makeover",
  //   sub2: "Bride and groom- semipermanent makeup , Microblading, Lip coloring",
  // },
  // {
  //   id: 4,
  //   heading: "makeover",
  //   sub: "Bride and groom- semipermanent makeup , Microblading, Lip coloring",
  // },
  //   {
  //     id: 3,
  //     heading: "Skin Maintenance",
  //     sub: "Aquaoxy facial, Meso glow, Semi permanent make up , PRP for face, Body polishing , Hydrafacial , Oxygeneo facial , Power glow facial , Photofacial",
  //   },
  //   {
  //     id: 4,
  //     heading: "Skin Concerns",
  //     sub: "Tummy tightening , Double chin removal , Body polishing , Underarms darkness , Excessive sweating , Laser hair reduction, Stretch marks removal, Tattoo removal",
  //   },
  //   {
  //     id: 5,
  //     heading: "hair treatments",
  //     sub: "PRP Treatments , Mesotherapy, Hair transplant",
  //   },
  // ];

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
  const [showMegaBox, setShowMegaBox] = useState(false);

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
        <div
          className={`mega-box ${showMegaBox ? "active" : ""}`}
          onMouseLeave={() => setShowMegaBox(false)}
        >
          <Image className="navarrow" src={tri} alt="" />
          <div className="contentN">
            <div className="row">
              <div>
                <a className="submenuhead" href="">
                  Anti-ageing Procedures
                </a>
                <span className="submenuitem">Non surgical face - lift</span>
                <span className="submenuitem">Liquid Lift</span>
                <span className="submenuitem">Mesobotox</span>
                <span className="submenuitem">Microneedling</span>
                <span className="submenuitem">Radiofrequency</span>
                <span className="submenuitem">Hifu</span>
                <span className="submenuitem">Ultherapy</span>
                <span className="submenuitem">Aqua Gold</span>
                <span className="submenuitem">Exillis</span>
                <span className="submenuitem">PRP with microneedling</span>
                <a className="submenuhead" href="">
                  Chemical Peel Treatment
                </a>
              </div>
              <div>
                <a className="submenuhead" href="">
                  Skin Concerns
                </a>
                <span className="submenuitem">Acne Treatment</span>
                <span className="submenuitem">Rosacea</span>
                <span className="submenuitem">Sun and age spots</span>
                <span className="submenuitem">Under eye dark circles</span>
                <span className="submenuitem">Brown Spots</span>
                <span className="submenuitem">Freckles Treatments</span>
                <a className="submenuhead" href="">
                  makeover
                </a>
                <span className="submenuitem">
                  Bride and groom- semipermanent makeup
                </span>
                <span className="submenuitem">Microblading</span>
                <span className="submenuitem">Lip coloring</span>
              </div>
              <div>
                <a className="submenuhead" href="">
                  Skin Maintenance
                </a>
                <span className="submenuitem">Aquaoxy facial</span>
                <span className="submenuitem">Meso glow</span>
                <span className="submenuitem">Semi permanent make up</span>
                <span className="submenuitem">
                  PRP for face, Body polishing
                </span>
                <span className="submenuitem">Hydrafacial</span>
                <span className="submenuitem">Oxygeneo facial</span>
                <span className="submenuitem">Power glow facial</span>
                <span className="submenuitem">Photofacial</span>
              </div>
              <div>
                <a className="submenuhead" href="">
                  Skin Concerns
                </a>
                <span className="submenuitem">Tummy tightening</span>
                <span className="submenuitem">Double chin removal</span>
                <span className="submenuitem">Body polishing</span>
                <span className="submenuitem">Underarms darkness</span>
                <span className="submenuitem">Excessive sweating</span>
                <span className="submenuitem">Laser hair reduction</span>
                <span className="submenuitem">Stretch marks removal</span>
                <span className="submenuitem">Tattoo removal</span>
              </div>
              <div>
                <a className="submenuhead" href="">
                  hair treatments
                </a>
                <span className="submenuitem">PRP Treatments</span>
                <span className="submenuitem">Mesotherapy</span>
                <span className="submenuitem">Hair transplant</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="middleNav">
            <li className="liNav" onClick={closeMenu}>
              <a
                className="navBTN navBTNS"
                onMouseEnter={() => setShowMegaBox(false)} // Close mega-box when hovering over About
                href="/about"
              >
                About
              </a>
            </li>
            {/* <li className="liNav" onClick={closeMenu}>
              <a className="navBTN navBTNS" href="/about">
                About
              </a>
            </li> */}
            <li
              className={`liNav subMenuParent ${
                showMegaBox ? "hover-effect" : ""
              }`}
            >
              <a
                className="navBTN"
                onMouseEnter={() => setShowMegaBox(true)}
                onClick={() => setShowMegaBox(!showMegaBox)}
                href="#"
              >
                Services
              </a>
            </li>

            {/* <ul className={`submenu ${isSubMenuOpen ? "active" : ""}`}>
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
              </ul> */}
            {/* </li> */}
            <li className="liNav" onClick={closeMenu}>
              <a
                className="navBTN navBTNS"
                onMouseEnter={() => setShowMegaBox(false)} // Close mega-box when hovering over Contact
                href="/contact"
              >
                Contact
              </a>
            </li>
            {/* <li className="liNav" onClick={closeMenu}>
              <a className="navBTN navBTNS" href="/contact">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <span className="menubar__button" onClick={toggleMenu}>
          <Image className="navmenuIcon" src={menu} alt="Logo" />
        </span>
        <button className="navABTN">
          Book an appointment <Image className="rightIMG" src={RIGHT} alt="" />
        </button>
      </nav>
    </div>
  );
}

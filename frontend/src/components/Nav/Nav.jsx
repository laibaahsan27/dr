"use client";
import "./Nav.css";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LOGO from "../../images/logoSVG.svg";
import RIGHT from "../../images/CaretRight.svg";
import menu from "../../images/hamburger.svg";
import tri from "../../images/Rectangle.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showMegaBox, setShowMegaBox] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false); // Close sub-menu when main menu toggles
    setShowMegaBox(false); // Close the mega box
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };
  const toggleResponsiveMenu = () => {
    setShowResponsiveMenu(prevState => !prevState);
  };
  const closeResponsiveMenu = () => {
    setShowResponsiveMenu(false);
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
        <div
          className={`mega-box ${showMegaBox ? "active" : ""}`}
          onMouseLeave={() => setShowMegaBox(false)}
        >
          <Image className="navarrow" src={tri} alt="" />
          <div className="contentN">
            <div className="row">
              <div>
                <a className="submenuhead" href="service1">
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
                <a className="submenuhead" href="service2">
                  Chemical Peel Treatment
                </a>
              </div>
              <div>
                <a className="submenuhead" href="service3">
                  Skin Concerns
                </a>
                <span className="submenuitem">Acne Treatment</span>
                <span className="submenuitem">Rosacea</span>
                <span className="submenuitem">Sun and age spots</span>
                <span className="submenuitem">Under eye dark circles</span>
                <span className="submenuitem">Brown Spots</span>
                <span className="submenuitem">Freckles Treatments</span>
                <a className="submenuhead" href="service4">
                  makeover
                </a>
                <span className="submenuitem">
                  Bride and groom- semipermanent makeup
                </span>
                <span className="submenuitem">Microblading</span>
                <span className="submenuitem">Lip coloring</span>
              </div>
              <div>
                <a className="submenuhead" href="service5">
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
                <a className="submenuhead" href="service6">
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
                <a className="submenuhead" href="service7">
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
                onMouseEnter={() => setShowMegaBox(false)}
                href="/about"
              >
                About
              </a>
            </li>
            <li
              className={`liNav subMenuParent ${
                showMegaBox ? "hover-effect" : ""
              }`}
            >
              <a
                className="navBTN navBTNSS"
                onMouseEnter={() => setShowMegaBox(true)}
                onClick={() => setShowMegaBox(!showMegaBox)}
                href="#"
              >
                Services
              </a>
              <a
                className="navBTNPhone"
                onClick={toggleResponsiveMenu}
                href="#"
              >
                Services
              </a>
              <ul className={`responsiveMENUCON ${showResponsiveMenu ? 'active' : ''}`}>
                <li>
                  <a className="responsiveMEnu" href="service1">
                    Anti-ageing Procedures
                  </a>
                </li>
                <li>
                  <a className="responsiveMEnu" href="service2">
                    Chemical Peel Treatment
                  </a>
                </li>
                <li>
                  <a className="responsiveMEnu" href="service3">
                    Skin Concerns
                  </a>
                </li>
                <li>
                  <a className="responsiveMEnu" href="service4">
                    makeover
                  </a>
                </li>
                <li>
                  <a className="responsiveMEnu" href="service5">
                    Skin Maintenance
                  </a>
                </li>
                <li>
                  <a className="responsiveMEnu" href="service7">
                    hair treatments
                  </a>
                </li>
              </ul>
            </li>
            <li className="liNav" onClick={closeMenu}>
              <a
                className="navBTN navBTNS"
                onMouseEnter={() => setShowMegaBox(false)}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className="menubar__button" onClick={() => { toggleMenu(); closeResponsiveMenu(); }}>
          <Image className="navmenuIcon" src={menu} alt="Logo" />
        </span>
        <button className="navABTN">
          Book an appointment <Image className="rightIMG" src={RIGHT} alt="" />
        </button>
      </nav>
    </div>
  );
}

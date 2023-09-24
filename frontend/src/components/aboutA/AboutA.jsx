import React from "react";
import "./AboutA.css";
import Image from "next/image";
import img from "../../images/about.png";
import mimg from"../../images/Group 57.png";


const AboutA = () => {
  return (
    <div className="AboutA">
      <div className="A-txt">
        <p>
          Meet Dr. Akanksha Agarwal, a career-oriented <br/>and enthusiastic facial
          aesthetician with a passion <br/>for excellence.<span className="bold">Currently serving as a
          visiting <br/>consultant at LA MiDAS aesthetics and One <br/>Aesthetics,</span>
        </p>
        <p>
          In addition to her clinical work, Dr. Akanksha Agarwal <br/>is <span className="bold">an esteemed
          lecturer</span>, sharing her insights on facial <br/>aesthetics at various
          institutions, including Delhi <br/>Institute of Healthcare and Research,
          SGT University <br/>in Gurgaon, and Jaipur Dental College. <span className="bold">With over 8<br/>
          years of experience, she has assisted numerous <br/>cosmetic surgeries</span>
          alongside plastic surgeons,<br/> dermato-surgeons, and trichologists. Her
          extensive <br/>knowledge and dedication make her a trusted facial<br/>
          aesthetician in the field.
        </p>
      </div>
      <div className="A-img">
        <Image className="img" src={img}/>
        <Image className="mimg" src={mimg}/>
      </div>
    </div>
  );
};

export default AboutA;

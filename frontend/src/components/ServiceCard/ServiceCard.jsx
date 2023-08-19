import React from "react";
import "./serviceCard.css";
import TextField from '@mui/material/TextField';
import Image from "next/image";
import phone from "../../images/Phone.svg";
import mail from "../../images/mail.svg";


const ServiceCard = () => {
  const styles = ({
    SFinput: {
        border: 'none',
        // borderBottom: '1px solid #F7DEE4',
        backgroundColor: '#C36386',
        paddingBottom: '15px',
        color: '#F7DEE4',
    },
  });

  return (
    <>
      <div className="contactNow">
        <div className="contactNowInner">
          <div className="contactHeading">CONTACT NOW</div>

          <div className="serviceForm">
            <form className="serviceFormInner" action="">
             <TextField className='SFinput'  sx={styles.SFinput} id="standard-basic"  placeholder="Full Name" label="Full Name" variant="standard" />
              <TextField className='SFinput' sx={styles.SFinput} id="standard-basic"  placeholder="Phone Number" label="Phone Number" variant="standard" />
              <TextField className='SFinput' sx={styles.SFinput} id="standard-basic"  placeholder="Email" label="Email" variant="standard" />
              <TextField className='SFinput' sx={styles.SFinput}id="standard-basic"  placeholder="Book Service" label="Book Service" variant="standard" />
              <button className="SFbutton" type="submit">
                Book an Appointment
              </button>
              <a className="SFconsultation" href="">
                Or book an Online Consultaion
              </a>
            </form>
          </div>

          <div className="location">
            <div className="contactHeading contactLoc">OUR LOCATION</div>
            <div className="maps">
              <iframe 
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.839966358022!2d77.10396117613342!3d28.48436579079244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195ade43d93d%3A0x5f39f707c70f7dc1!2sDr%20Ritesh%20Anand!5e0!3m2!1sen!2sin!4v1692439619117!5m2!1sen!2sin"
                width="372"
                height="200"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceCard;

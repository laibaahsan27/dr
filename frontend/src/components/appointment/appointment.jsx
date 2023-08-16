import './appointment.css'
import Image from "next/image";

import clinic from "../../images/clinic.svg";

export default function appointment() {
  return (
    <div className="bookA">
        <div className="bookForm">
          <input className="bookInput" type="text" placeholder="Full Name" />
          <input
            className="bookInput"
            type="text"
            placeholder="Mobile Number"
          />
          <input className="bookInput" type="text" placeholder="Email" />
          <input className="bookInput" type="text" placeholder="Book service" />
          <input
            className="bookInput"
            type="text"
            placeholder="Date and time"
          />
          <button className="bookBtn2">Book an appointment</button>
        </div>
        <div className="bookAdiv2">
          <div className="bookATxt">Book your Appointment </div>
          <div className="bookASpan">
            We look forward to serving you and helping you achieve your
            aesthetic goals. Thank you for choosing our practice.
          </div>
          <Image className="bookAclinic" src={clinic} alt="" />
        </div>
      </div>
  )
}

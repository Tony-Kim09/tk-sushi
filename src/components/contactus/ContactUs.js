import React from 'react'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <iframe className="contact-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8098762135!2d-79.51848455529245!3d43.71840339125603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1634752909136!5m2!1sen!2sca"
        title="Sushi" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>

      <div className="contact-us-text-container">
        <h2 className="contact-us-text-header">
          Toronto Location
        </h2>
        <div className="contact-us-location-container">
          <p className="contact-us-location">
            1234 Some St.  <br />
            Toronto, Ontario  <br />
            A1B 2C3 <br />
          </p>
        </div>
        <h3 className="contact-us-text-subheader">
          Business Hours
        </h3>
        <div className="contact-us-text">
          <h4 className="contact-us-days">Monday - Sunday</h4>
          <p className="contact-us-hours"><i>4pm to 11pm</i></p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

import React from 'react'
import SushiLogo from '../../assets/SushiLogo.png'
import './footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
      <a href="#header">
        <img className="footer-logo" src={SushiLogo} alt="Sushi Logo" />
      </a>
      <h2 className="footer-title">Contact Us</h2>
      <p className="footer-info">
        defaultemail@email.com <br />
        1234 Some Street <br />
        Toronto, ON<br />
        A1B 2C3 <br />
      </p>
      <h4 className="footer-number">
        123-123-1234
      </h4>
      <p className="footer-copyright">© Sushi 2021, All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
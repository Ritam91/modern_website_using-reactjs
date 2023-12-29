import React from 'react'
import './footer.css';
import Logo from '../../assets/GPT-3.svg';
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="footer__btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer__links">
        <div className="footer__links-logo">
          <img src={Logo} alt="logo" />
          <p>2023, All Rights Reserved</p>
        </div>

        <div className="footer__links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        
        <div className="footer__links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        
        <div className="footer__links-div">
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor amet.</p>
          <p>085-132567</p>
          <p>Counters</p>
          <p>info@info.com</p>
        </div>

      </div>

      <div className="footer__copyright">
        <p>© 2023. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
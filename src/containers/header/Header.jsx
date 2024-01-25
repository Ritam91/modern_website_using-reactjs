import React from "react";
import "./header.css";
import people from "../../assets/Group 81.png";
import illustration from "../../assets/Illustration.png";
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__content">
        <h1 className="gradient__text">
          Navigating the Future with Cutting-Edge Innovations.
        </h1>

        <p className="header__content-subcontent">
          Embark on a journey through the ever-evolving landscape of tomorrow's
          possibilities. Discover how cutting-edge innovations are reshaping
          industries, propelling us into a future defined by unprecedented
          advancements.
        </p>

        <div className="header__content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="header__content-people">
          <div>
            <img src={people} alt="people" />
          </div>
          <p>
          Join Our Thriving Community of 1.5k+ Innovators!
          </p>
        </div>
      </div>

      <div className="header__image">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Header;

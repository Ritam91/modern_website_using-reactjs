import React from "react";
import "./header.css";
import people from '../../assets/Group 81.png';
import illustration from '../../assets/Illustration.png'
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__content">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>

        <p className="header__content-subcontent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          voluptatibus magni! nem mollitia expedita nihil
          laboriosam, aut tempore itatibus? Reiciendis
          tenetur adipisci porro libero facere voluptatibus.
        </p>

        <div className="header__content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="header__content-people">
          <div>
            <img src={people} alt="people" />
          </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere.
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

import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/Feature Image.png';

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility__image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="possibility__content">
        <h1 className="gradient__text">Experience Innovation Up Close</h1>
        <p>Immerse yourself in the future with our cutting-edge technology. From AI to VR, explore the endless possibilities of innovation.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility
import React from 'react'
import './whatGPT.css';
import { Feature } from '../../components';
const Whatgpt = () => {
  return (
    <div className="whatgpt section__margin" id="wgpt">
      <div className="whatgpt__feature">
        <Feature/>
      </div>

      <div className="whatgpt__heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className="whatgpt__container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default Whatgpt
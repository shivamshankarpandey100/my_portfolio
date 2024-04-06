import React from 'react';
import './style.scss';
import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';

const Intro = () => {
  return (
    <div className="Intro-section">
      <div 
        className="vector-bg" 
        id='parallax'
      ></div>
      <img 
        src={cloud} 
        alt="" 
        className='cloud-soft' 
      />
      <img 
          src={cloudSoft} 
          alt="" 
          className='cloud-soft' 
      />
      <div className="content"></div>
    </div>
  )
}

export default Intro
import React from 'react'
import './style.scss'
import logo from '../../../images/s-letter-logo-png-862.png';
const Navigation = () => {
  return <div 
  className="top-navigation-bar">
<div className="app-log">
    <img src={logo} alt="js dev" />
</div>
<div className="navigation">
    <span className="navigation-item">Skills</span>
    <span className="navigation-item">Portfolio</span>
    <span className="navigation-item">Blogs & Articles</span>
</div>
  </div>
}

export default Navigation
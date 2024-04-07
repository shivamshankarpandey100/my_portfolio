import React from 'react';
import './style.scss';
import { BsAwardFill } from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import hand from "../../../images/hand.png";
import CallToAction from '../../shared/CallToAction';
import boy from '../../../images/boy.png';

const IntroContent = () => {
  return (
    <div className="intro-content">
        <div className="layout">
          <div className="left-col">
            <h1 className="title">
                <span className="small-text">
                    <span className="text">Hello</span>
                    <span className="icon">
                        <img src={hand} alt="" />
                    </span>
                    <span className="text">, I Am</span>
                </span>
                <span className="big-text">Shivam Shankar Pandey</span>
            </h1>
            <p>
            I am a 💻 Computer 👨🏻‍💻 Science Student . My Interested in: 💻 Computer Science, 🧠 Competitive Programming & 🐍 Web Development and AI&ML
            </p>
            <CallToAction text="Contact Me"/>
          </div>  
          <div className="right-col">
            <img src={boy} alt="userimage" />

            <div className="highlights horizontal">
                    <div className="icon">
                        <BsAwardFill />
                    </div>
                    <div className="text">Best Design Award
                    </div>
            </div>
            <div className="highlights verticle">
                <div className="icon">
                    <FaUser />
                </div>
                <div className="text">
                    <span>4k+</span>
                        Happy Coustomers
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IntroContent
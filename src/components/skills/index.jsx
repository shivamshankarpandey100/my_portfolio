import React from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";
import './style.scss';
import Section from '../shared/section';
import TechIcons from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction';

const Skills = () => {
  return (
    <Section background="dark" id="skills">
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={TechIcons} alt="skills_images" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
        
    </Section>
  )
}

export default Skills
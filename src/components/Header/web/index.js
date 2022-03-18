import React from 'react';
import "./web.css";

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <img src={process.env.PUBLIC_URL + '/images/web-design-icon-24.png'} alt="icon" className='option-icon' />Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <img src={process.env.PUBLIC_URL + '/images/skills-icon-24.png'} alt="icon" className='option-icon' />Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <img src={process.env.PUBLIC_URL + '/images/working-icon-24.png'} alt="icon" className='option-icon' />Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <img src={process.env.PUBLIC_URL + '/images/contact-icon-24.png'} alt="icon" className='option-icon' />Contact
                </a>
            </div>
            <div className="web-option">
                <a href="#resume">
                <img src={process.env.PUBLIC_URL + '/images/resume-24.png'} alt="icon" className='option-icon' />Resume
                </a>
            </div>
        </div>
    )
}

export default Web;

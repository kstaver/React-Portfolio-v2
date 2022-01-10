import React from 'react';
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <img src={process.env.PUBLIC_URL + '/images/unchecked-icon-24.png'} alt="icon" />
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#projects">
                    <img src={process.env.PUBLIC_URL + '/images/web-design-icon-24.png'} alt="icon" className='option-icon' />Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                    <img src={process.env.PUBLIC_URL + '/images/skills-icon-24.png'} alt="icon" className='option-icon' />Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                    <img src={process.env.PUBLIC_URL + '/images/working-icon-24.png'} alt="icon" className='option-icon' />Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                    <img src={process.env.PUBLIC_URL + '/images/contact-icon-24.png'} alt="icon" className='option-icon' />Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;

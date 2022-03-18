import React from 'react';
import './mobile.css';
import saveFile from "../saveFile";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
    background: hsla(266, 13%, 11%, 1);
    background: radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%); 
    background: -webkit-radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1B181F", endColorstr="#320459", GradientType=1 );

    font-size: 24px;
    color: white;
    border: none;
    font-weight: 500;
    padding-left: 0px;
`;

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
                <div className="mobile-option">
                    <a href="#resume">
                        <img src={process.env.PUBLIC_URL + '/images/resume-24.png'} alt="icon" className='option-icon' />               
                        <Button onClick={saveFile}>Resume</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;

import React from 'react';
import './mobile.css';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from "../../../assets/Kendra_Staver.docx";

const Button = styled.a``;

const StyledButton = styled(Button)`
    box-shadow:inset 0px 1px 0px 0px #e184f3;
    background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
    background-color:#c123de;
    border-radius:6px;
    border:1px solid #a511c0;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:20px;
    font-weight:bold;
    padding:2px 4px;
    text-decoration:none;
    text-shadow:0px 1px 0px #9b14b3;

    &:hover {
        background:linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
        background-color:#a20dbd;
    }
    &:active {
        position:relative;
        top:1px;
    }
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
                <div className="web-option">
                    <a href={resumePDF} without rel="noopener no referrer" target="_blank">
                        <StyledButton>Resume</StyledButton>
                    </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile;

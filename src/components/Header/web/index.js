import React from 'react';
import "./web.css";
import styled from "styled-components";
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
                <a href={resumePDF} rel="noopener noreferrer" target="_blank">
                    <StyledButton>Resume</StyledButton>
                </a>
            </div>
        </div>
    )
}

export default Web;
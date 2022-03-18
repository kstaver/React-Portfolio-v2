import React from 'react';
import "./web.css";
import saveFile from "../saveFile";
import styled from "styled-components";
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button1 = styled.button`
    -moz-box-shadow:inset 0px 1px 0px 0px #efdcfb;
    -webkit-box-shadow:inset 0px 1px 0px 0px #efdcfb;
    box-shadow:inset 0px 1px 0px 0px #efdcfb;
    background:linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
    background-color:#dfbdfa;
    border-radius:6px;
    border:1px solid #c584f3;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:20px;
    font-weight:bold;
    padding:1px 6px;
    text-decoration:none;
    text-shadow:0px 1px 0px #9752cc;
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
                <a href="#resume">
                    <Button1 onClick={saveFile}>Resume</Button1>
                </a>
            </div>
        </div>
    )
}

export default Web;


/*background: hsla(266, 13%, 11%, 1);
    background: radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%);
    background: -moz-radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%); 
    background: -webkit-radial-gradient(circle, hsla(266, 13%, 11%, 1) 0%, hsla(272, 91%, 18%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1B181F", endColorstr="#320459", GradientType=1 );
    */
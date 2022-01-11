import React from 'react';
import SocialContact from '../../commons/social-contact';
import './about.css';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello! 😺 My name is 
                    <br /><span className="info-name">Kendra Staver</span>.
                    <br />It is nice to meet you! I am a multitalented Front End Developer. 
                    I enjoy designing websites, solving problems, teaching, reading, 
                    and writing proofs.
                </div>
                <div className="about-photo">
                    <img src={require(process.env.PUBLIC_URL + "../../../assets/images/selfie-three.png")} className="picture" alt="selfie" />
                </div>
            </div>
        <SocialContact />
        </div>
    )
}

export default About;


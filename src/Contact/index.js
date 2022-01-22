import React from 'react';
import Separator from '../components/commons/separator';
import SocialContact from '../components/commons/social-contact';
import './contact.css'
import resume from '../../../assets/Kendra Staver - Resume.docx';
import downloadImage from "../../../assets/images/download-45.png";

function Contact() {
    return ( 
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to say hello? Feel free to contact me on any of the following platforms. My resume is also available for download.</p>
                    <SocialContact />
                </div>
                <div className='download'>
                   <a download href={resume}>
                   <img src={downloadImage} className="picture-download" alt="download"/> 
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;

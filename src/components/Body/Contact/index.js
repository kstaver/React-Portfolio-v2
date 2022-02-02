import React from 'react';
import Separator from '../../commons/separator';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialContact from '../../commons/social-contact';
import './Contact.module.scss';

function Contact() {
    return ( 
        <div className='contact'>
            <Separator />
            <div className='contact-container'>
                <div className='contact-info'>
                    <h4>
                        Contact Information
                    </h4>
                    <p>Text</p>
                    <div className='icon-text'>
                        <FaPhoneAlt />                                 
                        <span>+1(408)431-2895</span>
                    </div>
                    <div className='icon-text'>
                        <FaEnvelope />
                        <span>staverkendra@gmail.com</span>
                    </div>
                    <div className='social-media'>
                        <a href="#" className='icon-circle'>
                            <i className='icon'></i>
                        </a>
                    </div>
                </div>
                <form></form>
        </div>






               {/*<div className='contact-left'>
                    <p>Want to say hello? Feel free to contact me on any of the following platforms. My resume is also available for download.</p>
                    <SocialContact />
                </div>
                <div className='download'>
                   <a download href={resume}>
                   <img src={downloadImage} className="picture-download" alt="download"/> 
                        Download Resume
                    </a>
                </div>
    </div>*/}
    </div>
    )
}

export default Contact;

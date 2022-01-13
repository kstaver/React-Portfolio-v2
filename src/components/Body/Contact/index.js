import React from 'react';
import Separator from '../../commons/separator';
import SocialContact from '../../commons/social-contact';
import './contact.css'

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
                    <a download href={require('../../../assets/Kendra Staver - Resume.pdf').deafult}>
                        <img src="/images/download-24.png" alt="download" />
                        Download resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;

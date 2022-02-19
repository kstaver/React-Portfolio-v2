import React, { useState } from 'react';
import Separator from '../../commons/separator';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialContact from '../../commons/social-contact';
import './contact.css';
import Popup from './Popup';

function Contact() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return ( 
        <div className='contact'>
            <Separator />
            <button onClick={() => setButtonPopup(true)}>Contact me!</button>
            <div className='contact-container'>
                <div className='contact-info'>
                    <h4>
                        Contact Information
                    </h4>
                    <div className='icon-text'>
                        <FaPhoneAlt />                                
                        <span>&nbsp;+1(408)431-2895</span>
                    </div>
                    <div className='icon-text'>
                        <FaEnvelope />
                        <span>&nbsp;staverkendra@gmail.com</span>
                    </div>
                    <div className='social-media'>
                        <SocialContact />
                    </div>
                </div>
            </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>
        </div>
    )
}

export default Contact;
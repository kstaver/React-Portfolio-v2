import React from 'react';
import Separator from '../../commons/separator';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialContact from '../../commons/social-contact';
import './contact-container.css';

function Contact() {
    return ( 
        <div className='contact'>
            <Separator />
            <div className='contact-container'>
                <ul>
                    <li>
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
                    </li>
                    <li>
                        <div className="container">
                            <form action="action_page.php">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                <label htmlFor="lname">Last Name</label>
                                <input
                                    type="text"
                                    id="lname"
                                    name="lastname"
                                    placeholder="Your last name.."
                                />
                                <label htmlFor="subject">Subject</label>
                                <textarea
                                    id="subject"
                                    name="subject"
                                    placeholder="Write something.."
                                    style={{ height: 100 }}
                                    defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
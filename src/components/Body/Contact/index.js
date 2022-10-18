import React from 'react';
import Separator from '../../commons/separator';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialContact from '../../commons/social-contact';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e){
      e.preventDefault();
  
      emailjs.sendForm('service_k5w4kiq', 'template_6zhmpcc', e.target, 'HbvvfIYwt8Qwv1cIE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return ( 
        <div className='contact'>
            <Separator />
            <div className='contact-container'>
                <div className='contact-info'>
                    <div className='contact-title'>
                        Contact Information
                    </div>
                    <div className='icon-text'>
                        <FaPhoneAlt />                                
                        <span>&nbsp;&nbsp;+1(408)431-2895&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className='icon-text'>
                        <FaEnvelope />
                        <span>&nbsp;&nbsp;staverkendra@gmail.com</span>
                    </div>
                    <div className='social-media'>
                        <SocialContact />
                    </div>
                    <div className='container-form'>
                        <div className='contact-info-title'>Contact Me</div>
                            <form onSubmit={sendEmail}>
                                <div className='row pt-5 mx-auto'>
                                    <div className="col-8 form-group mx-auto">
                                        <input type="text" className='form-control' placeholder='Name' name="name"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="email" className='form-control' placeholder='Email Address' name="email"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="text" className='form-control' placeholder="Subject" name="subject"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <textarea type="text" className='form-control' id="" cols="30" rows="8" placeholder='Your message' name="message" />
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" className='btn btn-info' value="Send Message"/>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

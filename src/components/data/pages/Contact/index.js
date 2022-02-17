import React from 'react';
import resume from '../../assets/Kendra Staver - Resume.docx';
import downloadImage from "../../assets/images/download-45.png";
import Separator from '../../components/commons/separator';
import SocialContact from '../../components/commons/social-contact';
import './contact.css';

function Contact() {
    return ( 
        <section id='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className="form-container">  
                    <form id="contact" action="" method="post">
                        <h3>Colorlib Contact Form</h3>
                        <h4>Contact us for custom quote</h4>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabIndex="1" required autoFocus/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabIndex="2" required/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" required/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" required/>
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>
                </div>                   
                    <SocialContact />
                </div>
            <div className='download'>
                <a download href={resume}>
                <img src={downloadImage} className="picture-download" alt="download"/> 
                    Download Resume
                </a>
            </div>
        </section>
    )
}
export default Contact;

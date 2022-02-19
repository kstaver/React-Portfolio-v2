import React from 'react';
import './Popup.css';
import './contact.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className='pop-up'>
        <div className='popup-inner'>
            <div className='contact-form'>
                <div className='container'>
                <form>
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
            </div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}></button>
            { props.chidlren }
        </div>
    </div>
  ) : "";
}

export default Popup;
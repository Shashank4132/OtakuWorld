import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-heading">
                    <h1>Let's Talk</h1>
                </div>
                <div className="contact-form">
                    <input placeholder="  Your Name" />
                    <input placeholder="  Your Email" />
                    <input placeholder="  Your Message" />
                    <button><h3>Your Message</h3></button>
                </div>
            </div>
        </div>
    )
}

export default Contact;

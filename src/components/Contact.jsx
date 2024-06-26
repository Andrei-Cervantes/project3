import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.10585443831!2d121.06843577457475!3d14.706605374473645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaec5cf1db9253d97%3A0x3aa4d6ce71cfe84a!2sThe%20Medical%20Avenue!5e0!3m2!1sen!2sph!4v1716361939097!5m2!1sen!2sph" width="463" height="560" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-info-container'>
                <div className='address-number'>

                </div>
                <div className='email-info'>
                    <h3>Email:</h3>
                    <p>samplesalesemail@gmail.com</p> 
                </div>
                <div className='fb-info'>
                    <h3>Facebook:</h3>
                    <p>Stema Fabricated Metals Manufacturing</p>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import './contact.css';
import { FaClock, FaMap, FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function ContactUs() {

  return (
    <div className='contact'>
        <section id="page-header">
        <h2>
            #let's_talk
        </h2>
        <p classname="contact-p">
            LEAVE A MESSAGE. We Love to hear from you!
        </p>
    </section>

    <section id="contact">
        <div classname="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <p> <FaMap/> Jaipur , Rajasthan</p>
                </li>
                <li>
                    <p><FaMailBulk/> legalyodha3107@gmail.com</p>
                </li>
                <li>
                    <p><FaPhone/> 9057770955</p>
                </li>
                <li>
                    <p><FaClock/> Monday to Saturday : 10.00am to 7.00pm</p>
                </li>
                <li id="socials">
                    <a href="https://www.instagram.com/legalyodha.in?igsh=M3VudHFhNnJub3Y3&utm_source=qr"> <div><FaInstagram/></div> <p> : Instagram</p></a>   
                    <a href="https://www.facebook.com/profile.php?id=61558871204556&mibextid=LQQJ4d"> <div><FaFacebook/></div> <p> : Facebook</p></a>
                </li>
            </div>
        </div>
      
    </section>

    <section id="form-details">
        <form name="contact-us" method="post"  action='https://script.google.com/macros/s/AKfycbzDFXLfADPS8hDDAUYWjxw3VHJwXK_4SBPpLumfQsydqpx1qk6KDkf0EKmksdNvYstR/exec' id='my-form'>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you..</h2>
            <input type="text" placeholder="Your Name" name="Name"/>
            <input type="email" placeholder="E-mail" name="E-mail" required/>
            <input type="text" placeholder="Subject" name="Subject"/>
            <textarea name="Message" id="" cols="30" rows="6" placeholder="Your Message" required/>
            <button id='submit-contact' type='submit'>Submit</button>
        </form>
   </section>

    </div>
  )
}

export default ContactUs;
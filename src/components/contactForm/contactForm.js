import React, {} from "react";
import './contactForm.css'

function ContactForm(){

    return(
        <div id='contact'>
            <p id='contactTitle'>Contact Us</p>
            <p id='contactDes'>Get in touch!</p>
            <div id='contactForm'>
                <input class='contactInput row' type='text' placeholder='Name'></input>
                <input class='contactInput row' type='text' placeholder='Email*'></input>
                <input class='contactInput row' type='text' placeholder='Phone'></input>
                <textarea class='contactInput row'  type='text' placeholder='Message' rows='4'></textarea>
                <button id='contactBtn'>SEND</button>
            </div>
            

        </div>
    )
}
export default ContactForm;
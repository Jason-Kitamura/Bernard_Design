import React, {} from "react";
import './contactForm.css'

function ContactForm(){

    return(
        <div id='contact'>
            <p id='contactTitle'>Contact Us</p>
            <p id='contactDes'>We look forward to hearing from you!</p>
            <div id='contactForm'>
                <input class='contactInput row' type='text' placeholder='Name'></input>
                <input class='contactInput row' type='text' placeholder='Email*'></input>
                <input class='contactInput row' type='text' placeholder='Phone'></input>
                <textarea class='contactInput row'  type='text' placeholder='Message' rows='4'></textarea>
                <button id='contactBtn'>SEND</button>
            </div>
            <div id='contactInfo'>
                <p id='infoTitle'> Bernard Design Build</p>
                <p id='infoDes'>
                         Grayson Bernard
                    <br/>bernardbuild@gmail.com
                    <br/>(705) 888-0059
                </p>
            </div>
            

        </div>
    )
}
export default ContactForm;
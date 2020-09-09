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
                <p id='infoTitle'> Bernard Desing Build</p>
                <p id='infoDes'>
                    Grayson Bernard
                    <br/> (519) 215-0437 or (705) 888-0059
                    <br/>bernardbuild@gmail.com
                </p>
            </div>
            

        </div>
    )
}
export default ContactForm;
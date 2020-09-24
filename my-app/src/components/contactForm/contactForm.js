import React, { useState} from "react";
import './contactForm.css'

const axios = require('axios')

function ContactForm(){

    const [ name, setName ] = useState('');
    const [ mail, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    async function sendEmail(){
        console.log( 'sending email ');
        const newEmail = {
            name: name,
            email: mail, 
            phone: phone,
            message: message,
        }
        const email = await axios.post('http://localhost:5000/api/sendEmail', newEmail );
        console.log('sendign email:', newEmail)
    
    }
    

    return(
        <div id='contact'>
            <p id='contactTitle'>Contact Us</p>
            <p id='contactDes'>We look forward to hearing from you!</p>
            <div id='contactForm'>
                <input class='contactInput row' type='text' placeholder='Name' onChange={e => setName( e.target.value )}></input>
                <input class='contactInput row' type='text' placeholder='Email*' onChange={e => setEmail( e.target.value )}></input>
                <input class='contactInput row' type='text' placeholder='Phone' onChange={e => setPhone( e.target.value )}></input>
                <textarea class='contactInput row'  type='text' placeholder='Message' rows='4' onChange={e => setMessage( e.target.value )}></textarea>
                <button id='contactBtn' onClick={e => sendEmail()}>SEND</button>
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
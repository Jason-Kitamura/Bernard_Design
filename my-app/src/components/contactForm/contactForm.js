import React, { useState} from "react";
import './contactForm.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

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
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if( name === ''){
            toast.error('Please Enter Your Name', {position: toast.POSITION.TOP_CENTER});
        } else if ( mail === '' || reg.test(mail) == false){
            toast.error('Please Enter A Valid Email Address', {position: toast.POSITION.TOP_CENTER})
        } else if ( message === ''){
            toast.error('Please Enter A Message', {position: toast.POSITION.TOP_CENTER})
        } else {
            const response = await axios.post('http://localhost:5000/api/sendEmail', newEmail );
            console.log('sendign email:', response)
            if ( response.data === 'success'){
                toast.success('Email Sent!', {position: toast.POSITION.TOP_CENTER});
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else if ( response.data ==='error'){
                toast.error('There was an error sending your message', {position: toast.POSITION.TOP_CENTER})
            }
        }

    }
    

    return(
        <div id='contact'>
            <p id='contactTitle'>Contact Us</p>
            <p id='contactDes'>We look forward to hearing from you!</p>
            <div id='contactForm'>
                <input class='contactInput row' type='text' placeholder='Name*' value={name} onChange={e => setName( e.target.value )}></input>
                <input class='contactInput row' type='text' placeholder='Email*' value={mail} onChange={e => setEmail( e.target.value )}></input>
                <input class='contactInput row' type='text' placeholder='Phone' value={phone} onChange={e => setPhone( e.target.value )}></input>
                <textarea class='contactInput row'  type='text' placeholder='Message*'  value={message} rows='4' onChange={e => setMessage( e.target.value )}></textarea>
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
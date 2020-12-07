import React, { useState} from "react";
import './contactForm.css'

import emailjs from 'emailjs-com';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function ContactForm(){

    const [ name, setName ] = useState('');
    const [ mail, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    async function sendEmail(e){
        console.log( 'sending  ', name, mail, phone );
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

            emailjs.sendForm('gmail', 'BernardBuild_ContactForm', e.target, 'user_qLGy80gNbSYdGoYUnPr2A')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
        toast.success('Email Sent!', {position: toast.POSITION.TOP_CENTER});
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        e.target.reset();
    }
    

    return(
        <div id='contact'>
            <p id='contactTitle'>Contact Us</p>
            <p id='contactDes'>We look forward to hearing from you!</p>

            <form id='contactForm' onSubmit={sendEmail}>
                <input class='contactInput row' type='text' placeholder='Name*' name="name" onChange={e => setName(e.target.value)}></input>
                <input class='contactInput row' type='email' placeholder='Email*' name="email" onChange={e => setEmail(e.target.value)}></input>
                <input class='contactInput row' type='text' placeholder='Phone' name="phone" onChange={e => setPhone(e.target.value)}></input>
                <textarea class='contactInput row'  type='text' placeholder='Message*' name="message" rows='4' onChange={e => setMessage(e.target.value)}></textarea>
                <input id='contactBtn' type='submit' value='SEND'></input>
            </form>

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
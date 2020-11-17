
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars')
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function( req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})



app.post('/api/sendEmail', async ( req, res) =>{
    console.log( 'body', req.body );

    function sendConfirmationEmail(){

        let  transporter = nodemailer.createTransport({
            service: 'gmail',
            auth : {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });
    
        transporter.use('compile', hbs({
            viewEngine: 'express-handlebars',
            viewPath: './views/'
        }));
    
        let mailOptions = {
            from : 'bernardbuildmail@gmail.com',
            to : 'jasonkitamura@gmail.com',
            subject : 'Bernard Design Build Confirmation Email',
            text :`New Message from: ${req.body.name} email: ${req.body.email}, phone: ${req.body.phone}, message: ${req.body.message}`,
            template: 'confirmTemp'
    
        };
    
        transporter.sendMail( mailOptions, function( err, data){
            if ( err ){
                console.log('Error Occurs', err);
                // res.send('error')
            } else {
                console.log( 'Email sent!!!');
                // res.send('success')
            }
        })
    }

    let  transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    let mailOptions = {
        from : 'bernardbuildmail@gmail.com',
        to : 'jasonkitamura@gmail.com',
        subject : req.body.name,
        text :`New Message from: ${req.body.name} email: ${req.body.email}, phone: ${req.body.phone}, message: ${req.body.message}`,
    };

    transporter.sendMail( mailOptions, function( err, data){
        if ( err ){
            console.log('Error Occurs', err);
            res.send('error')
        } else {
            console.log( 'Email sent!!!');
            res.send('success');
            sendConfirmationEmail();
        }
    })

   
})





app.listen(port, () => console.log(`Listening on port ${port}`));
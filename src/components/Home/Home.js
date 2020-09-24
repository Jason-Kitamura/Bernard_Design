import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './home.css'

import homeLogo from './assets/BDBhomeLogo.png';

import left1 from './assets/leftSlide1.jpg';
import left2 from './assets/leftSlide2.jpg';
import left3 from './assets/leftSlide3.jpg';
import right1 from './assets/rightSlide1.jpg';
import right2 from './assets/rightSlide2.jpg';
import right3 from './assets/rightSlide3.jpg';


function Home(){

    const [ leftStyle, setLeftStyle ] = useState({
        backgroundImage: `url(${left1})`,
        opacity: 1,
    })
    const [ rightStyle, setRightStyle ] = useState( {
        backgroundImage: `url(${right1})`,
        opacity:1
    })
    const [ i, setI ]=useState(0)

    // function leftFadeIn(){
    //     setLeftOpacity( { opacity: 1 } )
    // }
    // function leftFadeOut(){ 
    //     setLeftOpacity( { opacity: 0} )
    // }

   
        function setLeft1(){
            document.getElementById('leftPhoto').classList.remove('fade-In');
            document.getElementById('leftPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setLeftStyle( {backgroundImage: `url(${left2})`})
                document.getElementById('leftPhoto').classList.add('fade-In');
                document.getElementById('leftPhoto').classList.remove('fade-Out');
            }, 500);
            setTimeout( () => {
                setRight1();
            }, 6000)
        }

        function setLeft2(){
            document.getElementById('leftPhoto').classList.remove('fade-In');
            document.getElementById('leftPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setLeftStyle( {backgroundImage: `url(${left3})`})
                document.getElementById('leftPhoto').classList.remove('fade-Out');
                document.getElementById('leftPhoto').classList.add('fade-In');
            }, 500);
            setTimeout( () => {
                setRight2();
            }, 6000)
        }

        function setLeft3(){
            document.getElementById('leftPhoto').classList.remove('fade-In');
            document.getElementById('leftPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setLeftStyle( {backgroundImage: `url(${left1})`})
                document.getElementById('leftPhoto').classList.remove('fade-Out');
                document.getElementById('leftPhoto').classList.add('fade-In');
            }, 500);
            setTimeout( () => {
                setRight3();
            }, 6000)
        }

        function setRight1(){
            document.getElementById('rightPhoto').classList.remove('fade-In');
            document.getElementById('rightPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setRightStyle( {backgroundImage: `url(${right2})`})
                document.getElementById('rightPhoto').classList.remove('fade-Out');
                document.getElementById('rightPhoto').classList.add('fade-In');
            }, 500);
            setTimeout( () => {
              
                setLeft2();
            }, 6000)
        }

        function setRight2(){
            document.getElementById('rightPhoto').classList.remove('fade-In');
            document.getElementById('rightPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setRightStyle( {backgroundImage: `url(${right3})`})
                document.getElementById('rightPhoto').classList.remove('fade-Out');
                document.getElementById('rightPhoto').classList.add('fade-In');
            }, 500);
            setTimeout( () => {
                setLeft3();
            }, 6000)
        }

        function setRight3(){
            document.getElementById('rightPhoto').classList.remove('fade-In');
            document.getElementById('rightPhoto').classList.add('fade-Out');
             setTimeout(() => {
                setRightStyle( {backgroundImage: `url(${right1})`});
                document.getElementById('rightPhoto').classList.remove('fade-Out');
                document.getElementById('rightPhoto').classList.add('fade-In');
            }, 500);
            setTimeout( () => {
                setLeft1();
            }, 6000)
        }

       useEffect( ()=>{
           setTimeout( () =>{
                setLeft1();
           }, 3000)
       },[])



  


    return(
        <div id='coverArea' >
                <div id='photoArea' class='row'>
                    <div id='homeLogo'>
                        <img src={homeLogo} alt='home logo'></img>
                    </div>
                    
                    <div id='leftPhoto' class='leftPhoto3 fade-In' style={leftStyle}>
                      
                    </div>
                    <div id='rightPhoto' class='rightPhoto3 fade-In' style={rightStyle}>
                        
                    </div>
                    
                </div>
                <div id='desBar'>
                    Interior Finishes & Custon Landscapes
                    <br/> ... we design & build both!
                </div>
                
                
                
            </div>
        
    )
}

export default Home;
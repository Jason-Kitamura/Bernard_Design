import React, { useEffect, useState } from 'react';
import '../../App.css';
import './about.css';

import photo1 from '../gallery/assets/BathroomPic.jpg';
import photo2 from '../gallery/assets/FireplacePic.jpg';
import photo3 from '../gallery/assets/FlooringPic.jpg';
import photo4 from '../gallery/assets/KitchenPic.jpg';
import photo5 from '../gallery/assets/MiscPic.jpg';
import photo6 from '../gallery/assets/OutdoorPic.jpg';

import aboutLeaf from '../gallery/assets/instaLeafPNG.png';

function About(){

  const [slidePhoto, setSlidePhoto] = useState({
    backgroundImage: `url(${photo1})`,
    opacity: 1,
  })
  const [fade, setFade]=useState('fade-in');

  function setPhoto1(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo1})`});
      setFade('fade-In');
   }, 500);
   setTimeout( () => {
       setPhoto2();
   }, 4000)
}

  function setPhoto2(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo2})`});
      setFade('fade-In')
    }, 500);
    setTimeout( () => {
        setPhoto3();
    }, 4000)
  }
  function setPhoto3(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo3})`});
      setFade('fade-In');
  }, 500);
  setTimeout( () => {
      setPhoto4();
  }, 4000)
  }
  function setPhoto4(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo4})`});
      setFade('fade-In');
  }, 500);
  setTimeout( () => {
      setPhoto5();
  }, 4000)
  }
  function setPhoto5(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo5})`});
      setFade('fade-In');
  }, 500);
  setTimeout( () => {
      setPhoto6();
  }, 4000)
  }
  function setPhoto6(){
    setFade('fade-Out');
    setTimeout(() => {
      setSlidePhoto( {backgroundImage: `url(${photo6})`});
      setFade('fade-In');
  }, 500);
  setTimeout( () => {
      setPhoto1();
  }, 4000)
  }

    useEffect( ()=>{
      setTimeout( () =>{
          setPhoto2();
      }, 2000)
  },[])

    return(
        <div id='aboutArea'>
          <div id='aboutGrid'>
            <div id='aboutSlide'>
            <div id='slideShow' className={fade} style={slidePhoto}>
              
            </div>
          </div>
          <div id='aboutDes'>
          <h1>What We Do</h1>
                    <br/>
                  <p>
                    We build beautiful, lasting spaces, special to our clients. Thoughtful design, quality installation and care for detail is standard to every project.   Whether it be a renovation or new installation we are happy to help make your space come to life.  Please take a look at our gallery of projects from Southern Georgian Bay to Caledon and Orangeville area.
                  </p>
                    <br/>
                  <h1>Working Together</h1>
                    <br/>
                  <p>
                    We offer an end-to-end client experience that includes seamless communication, budgeting, organization and quality workmanship. A full range of interior finishing services, specializing in tile and stone. 
                    <br/>
                    <br/>
                    <ul>
                      <li>Renovations</li>
                      <li>Bathrooms</li>
                      <li>Fireplaces</li>
                      <li>Tile</li>
                      <li>Stone</li>
                      <li>Cabinetry</li>
                      <li>Flooring</li>
                      <li>Landscape</li>
                    </ul>
                  </p>
          </div>
          <div id='aboutLeaf'>
            <img src={aboutLeaf}></img>
          </div>
          <div id='aboutFooter'>
            <p>
              About Us
            </p>   
          </div>
        </div>
        </div>
    )
}

export default About;
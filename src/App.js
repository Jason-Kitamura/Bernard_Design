import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import PhotoGallery from './components/gallery/PhotoGallery';
import ContactForm from './components/contactForm/contactForm';
import Footer from './components/footer/Footer';





function App() {
  
  return (
    <Router>
      <div className="App">

          <NavBar/>

          <Switch>
            <Route path={["/gallery"]} component={PhotoGallery} />
            <Route path={['/']}>
                <Home/>
                <About/>
                <Gallery/>
                <ContactForm/>
            </Route>
          </Switch>
          
          
  
          <Footer/>
                  
      </div>
    </Router>
  );
}

export default App;

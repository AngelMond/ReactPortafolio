import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
class Router extends Component {
    render(){
        return(
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/resume' element={<Resume/>}/>
            </Routes>
        )
    }
}

export default Router;
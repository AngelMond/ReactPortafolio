import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/ReactPortfolio/' element={<HomePage />} />
                    <Route path='/ReactPortfolio/about' element={<AboutMe />} />
                    <Route path='/ReactPortfolio/portfolio' element={<Portfolio />} />
                    <Route path='/ReactPortfolio/contact' element={<Contact />} />
                    <Route path='/ReactPortfolio/resume' element={<Resume />} />
                </Routes>
            </Router>
        )
    }
}
export default RouterComponent;
import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
class Router extends Component {
    render(){
        return(
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
        )
    }
}

export default Router;
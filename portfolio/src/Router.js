import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe'
class Router extends Component {
    render(){
        return(
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutMe/>}/>

            </Routes>
        )
    }
}

export default Router;
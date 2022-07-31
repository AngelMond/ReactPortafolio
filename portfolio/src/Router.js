import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';

class Router extends Component {
    render(){
        return(
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        )
    }
}

export default Router;
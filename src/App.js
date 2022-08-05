import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;

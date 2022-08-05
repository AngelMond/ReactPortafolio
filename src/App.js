import React from 'react'
// import RouterComponent from './Router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/ReactPortfolio/' element={<HomePage />} />
            <Route path='/ReactPortfolio/about' element={<AboutMe />} />
            <Route path='/ReactPortfolio/portfolio' element={<Portfolio />} />
            <Route path='/ReactPortfolio/contact' element={<Contact />} />
            <Route path='/ReactPortfolio/resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

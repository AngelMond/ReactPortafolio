import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Carousel from './components/carousel/Carousel.js';
import HomePage from './components/home/HomePage';
import AboutMe from './components/about-me/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={
                        <div className='container mt-5 d-flex align-items-center justify-content-center page-not-found'>
                            <h2 className='text-center'>404 Page not found</h2>
                        </div>
                    }
                    />
                </Routes>
            </Router>
        )
    }
}

// function PortfolioRoutes() {
//     // state of current page 
//     const [currentPage, handlePageChange] = useState('/');

//     const renderPage = () => {
//         // switch statement that will return the appropriate component of the 'currentPage'
//         switch(currentPage) {
//           case "about": 
//           return <AboutMe></AboutMe>
//           case "contact": 
//           return <Contact></Contact>
//           case "portfolio":
//           return  <Projects></Projects>
//           case "resume": 
//           return <Resume></Resume>
//           default:
//             return <HomePage></HomePage>
//         }

//     };

// return (
//     <div>
//       <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//       <div>
//         {
//           // Render the component returned by 'renderPage()'
//           renderPage()
//         }
//       </div>
//     </div>
//   );
// }

// export default PortfolioRoutes;


export default RouterComponent;
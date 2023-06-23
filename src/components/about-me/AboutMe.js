import React, { Component } from 'react';

import googleEngineer from '../../images/tech-images/devops/cloudEngineer.png';


class AboutMe extends Component {
    render() {
        return (
            <section className='container fs-responsive'>
                <article className='section-border mt-5 p-4 shadow  text-start'>
                    <h3 className='text-center section-headings mb-4'>Full Stack Web Developer</h3>
                    <div id="aboutMe-text-container" className='p-2 ff'>
                        <p className='paragraph  px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                            I'm from Mexico City experience as a fullstack developer, in the front-end using React and bootstrap and integreating APIs created in Java for all the server communication,
                            and in back-end using Express.
                        </p>
                        <p className='paragraph fs-4 px-3 mb-4 text-sm-start text-md-start fw-bold fs-responsive'>
                            Experience building +100 user interfaces in the currect project.
                        </p>
                        <p className='paragraph fs-4 px-3 text-sm-start text-md-start fw-bold mb-5 mt-5 fs-responsive'>
                            <div className='row align-items-center'>
                                <div className='col-12 col-sm-4 col-md-2 '>
                                    <a href="https://google.accredible.com/88844f39-e85b-4985-83d3-a99c89bbb6a8" target="_blank">
                                        <img src={googleEngineer} alt="Google Associate Cloud Engineer" title="Click to view credentials as Associate Cloud Engineer" className="aboutMeImages" />
                                    </a>
                                </div>
                                <div className='col-12 col-sm-8 col-md-10 fs-responsive'>
                                    <span className=''>Certified as a Google Associate Cloud Engineer</span>
                                </div>

                            </div>
                        </p>
                        <p className='paragraph  px-3 mb-4 text-sm-start text-md-start'>

                            <div className='row mt-5 fs-responsive'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                    <span className='fw-bold'> Skills as Google Cloud Engineer:</span>
                                    <ul className='mt-4 mb-5 text-start'>
                                        <li className='text-muted ff'>Creation of VMs and instance groups</li>
                                        <li className='text-muted ff'>Clusters in kubernetes</li>
                                        <li className='text-muted ff'>Docker &#40;Containers & Registry&#41;</li>
                                        <li className='text-muted ff'>Deploy applications using Cloud BUild, Cloud Run and App Engine</li>
                                        <li className='text-muted ff'>CI/CD - Splitting traffic across different versions in App Engine</li>
                                    </ul>
                                </div>

                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                    <span className='fw-bold'> Skills as Developer:</span>
                                    <ul className='mt-4 mb-5 text-start'>
                                        <li className='text-muted ff'>JavaScript</li>
                                        <li className='text-muted ff'>
                                            React
                                            <ul>
                                                <li>Professional use of react hooks &#40;useState, useContext, useEffect&#41;</li>
                                                <li>Conditional rendering</li>
                                            </ul>
                                        </li>
                                        <li className='text-muted ff'>
                                            APIs
                                            <ul>
                                                <li>Send and receive responses&#40;Objects, files, timestamps, etc..&#41;</li>
                                                <li>Render the necessary information according to the requirement</li>
                                            </ul>
                                        </li>
                                        <li className='text-muted ff'>Creation and validation of forms for securities transactions</li>
                                        <li className='text-muted ff'>TDD &#40;Test Driven Develpment&#41;</li>
                                        <li className='text-muted ff'>Initialize react projects with CRA or Vite</li>
                                    </ul>
                                </div>
                            </div>
                        </p>

                        <p className='paragraph  px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                            I've always had a passion for technology, i just can sitdown for hours and hours to programm. I have never felt so much passion for something in my life and i'am just happy to have discovered my passion.
                            I remember a saying:  <cite className='fw-bold'>"Choose a job you're passionate about and you won't have to work a day in your life". </cite>
                            I can say that i'm living that!
                        </p>

                        {/* <p className=' px-3 mb-4 text-sm-start text-md-start'>
                            I consider myself a disciplined person, and that helps me a lot to get the necessary knowledge to work as a web developer.
                            I really like learning about data structures and algorithms, I think that's a fundamental part of being a good software developer.
                        </p> */}

                        <p className='paragraph  px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                            My resume is provided, so please feel free to download it, if interested look forward to hearing from you!
                        </p>
                        <p className='paragraph px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                            Wisdom comes from experience and experience is often the result of a lack of
                            wisdom.
                            <figcaption>
                                -<cite id="sourceCite" title="Source">Terry Pratchett</cite>
                            </figcaption>
                        </p>
                    </div>
                </article>
            </section>
        )
    }
}
export default AboutMe;
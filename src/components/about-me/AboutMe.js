import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <section className='container '>
                <article  className='section-border mt-5 p-4 shadow'>
                    <h3 className='paragraph text-center section-headings'>Full Stack Web Developer</h3>
                    <div id="aboutMe-text-container" className='p-2'>
                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start'>
                            I'm from Mexico City and i'm almost have a year of experience as a fullstack developer, mostly in the front-end using React and bootstrap.
                            Experience using Nodejs, and creating user interfaces.
                        </p>
                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start fw-bold'>
                            I'm certified as a Google Associate Cloud Engineer.
                        </p>
                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start fw-bold'>
                            Experience creating VMs, clusters in kubernetes, use of containers and registry to deploy in Cloud Run, using of images to deploy applications in App Engine.
                        </p>

                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start'>
                            I've always had a passion for technology, i just can sitdown for hours and hours to programm. I have never felt so much passion for something in my life and i'am just happy to have discovered my passion.
                            I remember a saying:  <cite>"Choose a job you're passionate about and you won't have to work a day in your life". </cite>
                            I can say that i'm living that!
                        </p>

                        <p className='fs-4 px-3 mb-4 text-sm-center text-md-start'>
                            I consider myself a disciplined person, and that helps me a lot to get the necessary knowledge to work as a web developer. 
                            I really like learning about data structures and algorithms, I think that's a fundamental part of being a good software developer.
                        </p>

                        <p className='paragraph fs-4 px-3 mb-4 text-sm-center text-md-start'>
                            My resume is provided, so please feel free to download it, if interested look forward to hearing from you!
                        </p>
                        <p>
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
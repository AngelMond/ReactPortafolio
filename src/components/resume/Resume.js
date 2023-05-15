import React, { Component } from "react";
import { Link } from "react-router-dom";

//Frontend Images
import api from '../../images/tech-images/front-end/api.png';
import bootstrap from '../../images/tech-images/front-end/bootstrap.png';
import css from '../../images/tech-images/front-end/css.png';
import html from '../../images/tech-images/front-end/html.png';
import javascript from '../../images/tech-images/front-end/javascript.png';
import jquery from '../../images/tech-images/front-end/jquery.png';
import json from '../../images/tech-images/front-end/json.png';
import react from '../../images/tech-images/front-end/react.png';


//Backend images
import mongodb from '../../images/tech-images/back-end/mongodb.png';
import nodejs from '../../images/tech-images/back-end/nodejs.png';
import npm from '../../images/tech-images/back-end/npm.png';
import sql from '../../images/tech-images/back-end/sql.png';
import graphql from '../../images/tech-images/back-end/graphql.png'

//Devops images
import git from '../../images/tech-images/devops/git.png';
import github from '../../images/tech-images/devops/github.png';
import heroku from '../../images/tech-images/devops/heroku.png';
import vscode from '../../images/tech-images/devops/vscode.png';
import googleEngineer from '../../images/tech-images/devops/cloudEngineer.png';

//Resume image
import pdfImage from '../../images/pdf-icon.AVIF'
import resume from './resume.pdf'
class Resume extends Component {
    render() {
        return (
            <section className="container">
                <article id="aboutMe-text-container" className='row section-border mt-5 p-4 shadow justify-content-center'>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">Front-end proficiencies</h3>
                        <div className='d-flex flex-wrap justify-content-center p-3'>
                            <img className="techImagesSize" src={api} alt="API" title="API" />
                            <img src={bootstrap} alt="Bootstrap" title="Bootstrap" />
                            <img src={css} alt="CSS" title="CSS" />
                            <img src={html} alt="HTML" title="HTML" />
                            <img src={javascript} alt="JavaScript" title="JavaScript" />
                            <img src={jquery} alt="JQuery" title="JQuery" />
                            <img src={json} alt="Json" title="Json" />
                            <img src={react} alt="React" title="React" />
                        </div>
                    </div>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">Back-end proficiencies</h3>
                        <div className='d-flex flex-wrap justify-content-center p-3'>
                            <img src={mongodb} alt="MongoDB" title="MongoDB" />
                            <img src={nodejs} alt="Nodejs" title="Nodejs" />
                            <img src={npm} alt="NPM" title="NPM" />
                            <img src={sql} alt="SQL" title="SQL" />
                            <img src={graphql} alt="Graphql" title="GraphQL" />
                        </div>
                    </div>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">DevOps/Other Applications</h3>
                        <div className='d-flex flex-wrap justify-content-center p-3'>
                            <a href="https://google.accredible.com/88844f39-e85b-4985-83d3-a99c89bbb6a8" target="_blank">
                                <img src={googleEngineer} alt="Google Associate Cloud Engineer" title="Click to view credentials as Associate Cloud Engineer" className="resumeImages" />
                            </a>
                            <img src={git} alt="Git" title="Git" />
                            <img src={github} alt="Github" title="Github" />
                            <img src={heroku} alt="Heroku" title="Heroku" />
                            <img src={vscode} alt="VSCode" title="VSCode" />
                        </div>
                    </div>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">Download resume</h3>
                        <div className='d-flex flex-wrap justify-content-center p-3'>
                            <a className="resumeImage" href={resume} target="_blank" rel="noopener noreferrer"><img src={pdfImage} width="50" height="50" alt="resume" title="pdf-resume" /></a>
                            <p className="col-12 text-center text-muted mt-2" id="titleResume">Click to Download</p>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default Resume;
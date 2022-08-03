import React, { Component } from "react";

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

//Devops images
import git from '../../images/tech-images/devops/git.png';
import github from '../../images/tech-images/devops/github.png';
import heroku from '../../images/tech-images/devops/heroku.png';
import vscode from '../../images/tech-images/devops/vscode.png';

class Resume extends Component {
    render() {
        return (
            <section className="container">
                <article id="aboutMe-text-container" className='row section-border mt-5 p-4 shadow justify-content-center'>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">FRONT-END PROFICIENCIES</h3>
                        <div className='d-flex flex-wrap justify-content-center p-3'>
                            <img className="techImagesSize" src={api} alt="API" title="API"/>
                            <img src={bootstrap} alt="Bootstrap" title="Bootstrap"/>
                            <img src={css} alt="CSS" title="CSS"/>
                            <img src={html} alt="HTML" title="HTML"/>
                            <img src={javascript} alt="JavaScript" title="JavaScript"/>
                            <img src={jquery} alt="JQuery" title="JQuery"/>
                            <img src={json} alt="Json" title="Json"/>
                            <img src={react} alt="React" title="React"/>
                        </div>
                    </div>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">BACK-END PROFICIENCIES</h3>
                            <div className='d-flex flex-wrap justify-content-center p-3'>
                                <img src={mongodb} alt="MongoDB" title="MongoDB" />
                                <img src={nodejs} alt="Nodejs" title="Nodejs" />
                                <img src={npm} alt="NPM" title="NPM" />
                                <img src={sql} alt="SQL" title="SQL" />
                            </div>
                    </div>
                    <div className="col-md-10 mb-5">
                        <h3 className="text-center border-bottom border-muted p-2 section-headings">DEVOPS/OTHER APPLICATIONS</h3>
                            <div className='d-flex flex-wrap justify-content-center p-3'>
                                <img src={git} alt="Git" title="Git" />
                                <img src={github} alt="Github" title="Github" />
                                <img src={heroku} alt="Heroku" title="Heroku" />
                                <img src={vscode} alt="VSCode" title="VSCode" />
                            </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default Resume;
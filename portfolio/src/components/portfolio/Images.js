import React, {Component} from 'react';

//Images
import devBlog from '../../images/devBlog.jpg';
import nurseXpress from '../../images/nurseXpress.jpg';
import weather from '../../images/weather.jpg';
import profileGenerator from '../../images/profileGenerator.jpg';
import employeeTracker from '../../images/employeeTracker.jpg';
import socialNetwork from '../../images/socialNetwork.jpg';
import ecommerceBackend from '../../images/ecommerceBackend.jpg';
import noteTaker from '../../images/noteTaker.jpg';


class Images extends Component{
    render(){
        return(
            <div className='p-2 d-flex flex-wrap justify-content-center align-items-center'>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div className='image-and-description-container'>
                        <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>DevBlog</h5>
                            <p className='description'>
                                A blog for developers to share any topic by creating posts and add comments for other's posts
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/MVC/Bootstrap/MySQL/HBS</span>
                        </div>
                        <img className='projectImage' alt='Proyect-DevBlog' title='Proyect-Image-DevBlog' src={devBlog}/>
                    </div>
                    <div className='d-flex mt-1  justify-content-around'>
                        <a href='https://github.com/AngelMond/Dev-Blog' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://sheltered-everglades-31029.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='btn'>Web</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Weather Dashboard</h5>
                            <p className='description'>
                               A web to see the weather and five days forecast weather
                            </p>
                            <span className='project-technologies fst-italic'>JS/Bootstrap/HTML</span>
                        </div>
                        <img alt='Proyect-Weather' title='Proyect-Image-Weather' src={weather}/>
                    </div>
                    <div className='d-flex mt-1  justify-content-around'>
                        <a href='https://github.com/AngelMond/Weather-Dashboard' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://angelmond.github.io/Weather-Dashboard/' target='_blank' rel="noopener noreferrer" className='btn'>Web</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>NurseXpress</h5>
                            <p className='description'>
                                An idea to provide nursing services just as an injection, receiving serum and also to generate
                                freelance work for nurses. <i>Still in developmet</i>
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/MVC/Express/MySQL/HBS</span>
                        </div>
                        <img alt='Proyect-NurseXpress' title='Proyect-Image-NurseXpress' src={nurseXpress}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/aeklf/NurseXpress' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://nurse-express-s.herokuapp.com/' target='_blank' rel="noopener noreferrer"  className='btn'>Web</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Work Team Generator</h5>
                            <p className='description'>
                               A program developed with nodejs to generate a team profile in a software team.
                                The app let's you generate profiles for a manager, engineer's and intern's
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/Bootstrap/HTML</span>
                        </div>
                        <img alt="Project-Profile-Generator"  title='Proyect-Image-ProfileGenerator' src={profileGenerator}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/AngelMond/Work-Team-Generator' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://drive.google.com/file/d/1rwORViybUlItr28VoGnmMV5ZN0-ymyIV/view' target='_blank' rel="noopener noreferrer"  className='btn'>Demo</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Employee Tracker</h5>
                            <p className='description'>
                                As a human resourses you can view and manager, the departments, roles and employees in the company
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/MySQL/Git</span>
                        </div>
                        <img alt='Project-Employee-Tracker' title='Running-Program-With-Nodejs' src={employeeTracker}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/AngelMond/Employee-Tracker' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://drive.google.com/file/d/1_dj2cls3sSDr0GcMjtEgj37k6DpedpRX/view' target='_blank' rel="noopener noreferrer"  className='btn'>Demo</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Social Network</h5>
                            <p className='description'>
                                A Backend for a social Network. Create users, add friends, create thoughts 
                                and comment the other's thoughts. It uses Express for routing
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/Express/MongoDB/Git</span>
                        </div>
                        <img alt='Project-Social-Network' title='Insomnia-Testing-Routes-MongoDB' src={socialNetwork}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/AngelMond/SocialNetwork-API' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://drive.google.com/file/d/183TcwXEPZySR_0NtCNcf2LVRZvmmloUb/view' target='_blank' rel="noopener noreferrer"  className='btn'>Demo</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Ecommerce Backend</h5>
                            <p className='description'>
                                A Backend for an ecommerce bussiness that uses MySQL and the ORM Sequelize. Create 
                                categories, products and tags fro you products
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/Express/MySQL/Sequelize</span>
                        </div>
                        <img alt='Project-Ecommerce-Backend' title='SQL-Workbench' src={ecommerceBackend}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/AngelMond/The-BackEnd-YouNeed-ForYour-ECommerce-Business' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://drive.google.com/file/d/1UsbSQ5RegvqVPKQghQcotLU7-IixRx02/view' target='_blank' rel="noopener noreferrer"  className='btn'>Demo</a>
                    </div>
                </div>
                <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                    <div>
                    <div className='proyectDescription rounded align-items-center'>
                            <h5 className='project-title mb-3'>Note Taker</h5>
                            <p className='description'>
                                A simple web to take notes, it uses a .json file to save your notes and take them wherever you go
                            </p>
                            <span className='project-technologies fst-italic'>Nodejs/Express/HTML/CSS</span>
                        </div>
                        <img alt='Prject-Note-Taker' title='Web-NoteTaker' src={noteTaker}/>
                    </div>
                    <div className='d-flex mt-1 justify-content-around'>
                        <a href='https://github.com/AngelMond/Note-Taker' target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
                        <a href='https://blooming-anchorage-79721.herokuapp.com/' target="_blank" rel="noopener noreferrer"  className='btn'>Web</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Images;
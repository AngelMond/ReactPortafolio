import React, {Component} from 'react';
import photo from '../../images/my-photo.jpg';

class HomePage extends Component{
    render(){
        return(
          <section className='container'>
              <article className='section-border row d-flex flex-wrap homePage mt-5 p-4 shadow  align-items-center'>
                <div className='col'>
                    <h2 className='display-1 text-center'>Hi, I'm Angel!</h2>
                    <p className='display-6 text-center'>A Pasionate Software Engineer</p>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <img id='myPhoto' className='rounded-circle' src={photo}/>
                </div>
            </article>
          </section>
        )
    }
}
export default HomePage;
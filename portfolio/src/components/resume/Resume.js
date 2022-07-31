import React, { Component } from "react";

class Resume extends Component {
    render() {
        return (
            <section className="container">
                <article id="aboutMe-text-container" className='section-border mt-5 p-4 shadow'>
                    <div>
                        <h3>FRONT END PROFICIENCIES</h3>
                        <div className='skillImages'>

                        </div>
                    </div>
                    <div>
                        <h3>BACK END PROFICIENCIES</h3>
                        <div className='skillImages'>

                        </div>
                    </div>
                    <div>
                        <h3>DEVOPS/OTHER APPLICATIONS</h3>
                        <div className='skillImages'>

                        </div>
                    </div>

                </article>
            </section>
        )
    }
}

export default Resume;
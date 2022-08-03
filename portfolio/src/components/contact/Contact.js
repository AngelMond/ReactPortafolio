import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section className="container contact-section mt-5">
                <article className="section-border p-3">
                    <h3 className="section-headings text-center">Contact</h3>
                    <div className="row justify-content-center mt-4">
                        <div className="col-12 col-md-9">
                            <form action="" className="form" method="post">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-floating ">
                                            <input className="form-control" type="text" name="name" placeholder="Name" />
                                            <label className="" for="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-floating ">
                                            <input className="form-control" type="text" name="email" placeholder="email" />
                                            <label className="" for="email">email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating ">
                                            <textarea className="form-control textarea-contact" name="message" id="message" placeholder="Message">
                                            </textarea>
                                            <label for="message">Message</label>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <button className="sendButton" type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default Contact;
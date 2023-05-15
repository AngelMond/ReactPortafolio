import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';





const Contact = () => {
    const formRef = useRef();

    const [message, setMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [messageSended, setMessageSended] = useState();

    const [isLoading, setIsLoading] = useState(false);



    //Handler for Email input
    const handleValidEmail = event => {
        setMessageSended(null);
        if (!isValidEmail(event.target.value)) {
            //If input not receive a valid email will display an error message
            setErrorEmail('Email is invalid');
        } else {
            setErrorEmail(null);
        }
        setMessage(event.target.value);
    };

    const isValidEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    //Handler for Name input
    const handlerName = (event) => {
        setMessageSended(null);
        if (!requireName(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorName("This field is required")
        } else {
            setErrorName(null)
        }
        setMessage(event.target.value)
    }

    const requireName = (name) => {
        return /^[a-z, .'-']+$/i.test(name)
    }



    //Handler for Message input
    const handlerMessage = (event) => {
        setMessageSended(null);
        if (!requireMessage(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorMessage("This field is required");
        } else {
            setErrorMessage(null)
        }
        setMessage(event.target.value)
    }

    const requireMessage = (message) => {
        return /^[a-z, .'-', 0-9, *+/!, \n]+$/i.test(message)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_ID, formRef.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                setErrorMessage(false);

                if (result.status === 200) {
                    setMessageSended("Message sended");
                    setIsLoading(false);


                } else {
                    setErrorMessage("Message not sent");
                    setIsLoading(false);

                }

            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <section className="container contact-section mt-5">
            <article className="section-border p-3">
                <h3 className="section-headings text-center">Contact</h3>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-9">
                        <form ref={formRef} onSubmit={handleSubmit} id="form" >
                            <div className="row mt-3">
                                {!isLoading &&
                                    <>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="form-floating ">
                                                <input onMouseLeave={handlerName} id="inputName" className="form-control" type="text" name="name" placeholder="Name" required/>
                                                <label className="text-start" htmlFor="name">Name</label>
                                                {errorName && <h5 id="requireName" className=" text-danger fs-6 mt-2 text-start">{errorName}</h5>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="form-floating ">
                                                <input onChange={handleValidEmail} id="inputEmail" className="form-control" type="text" name="email" placeholder="email" required/>
                                                <label className="text-start" htmlFor="email">email</label>
                                                {errorEmail && <h5 id="invalidEmail" className=" text-danger fs-6 mt-2 text-start">{errorEmail}</h5>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating ">
                                                <textarea onMouseLeave={handlerMessage} id="inputMessage" className="form-control textarea-contact" name="message" placeholder="Message" required>
                                                </textarea>
                                                <label className="text-start" htmlFor="message">Message</label>
                                                {errorMessage && <h5 id="requireMessage" className=" text-danger fs-6 mt-2 text-start">{errorMessage}</h5>}
                                                {messageSended &&
                                                    <h5 className=" text-success fs-6 mt-2 text-center">{messageSended}</h5>
                                                }
                                            </div>

                                            <div className="d-flex justify-content-end mt-3">
                                                <input id="reload" className="sendButton text-start" type="submit" value="Send" />
                                            </div>
                                        </div>
                                    </>
                                }
                                {isLoading &&
                                    <div className="col-12">
                                        <div className="row justify-content-center">
                                            <div class="spinner-border col-12" role="status">
                                            </div>
                                            <span class="text-center">Sending message...</span>

                                        </div>
                                    </div>

                                }
                            </div>

                        </form>
                    </div>
                </div>
            </article>
        </section>

    )
}

export default Contact;
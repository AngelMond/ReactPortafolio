import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [message, setMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    //Handler for Email input
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleValidEmail = event => {
        if (!isValidEmail(event.target.value)) {
            //If input not receive a valid email will display an error message
            setErrorEmail('Email is invalid');
        } else {
            setErrorEmail(null);
        }
        setMessage(event.target.value);
    };


    //Handler for Name input
    const requireName = (name) => {
        return /^[a-z, .'-']+$/i.test(name)
    }
    const handlerName = (event) => {
        if (!requireName(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorName("This field is required")
        } else {
            setErrorName(null)
        }
        setMessage(event.target.value)
    }

    //Handler for Message input
    const requireMessage = (message) => {
        return /^[a-z, .'-', 0-9, *+/]+$/i.test(message)
    }
    const handlerMessage = (event) => {
        if (!requireMessage(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorMessage("This field is required")
        } else {
            setErrorMessage(null)
        }
        setMessage(event.target.value)
    }


    // const sendForm= ()=>{
    //     const form = document.querySelector("#form");
    //     form.addEventListener('submit', handlerSubmit )

    //     function handlerSubmit(event){
    //         event.preventDefault();
    //        const newForm = new FormData(form)
    //        console.log(newForm.get('name'))
    //     }
    // }

    //Send Form to my email
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9mqxg39', 'template_oy8guul', formRef.current, '6uokKZOsjTF7uLKam')
            .then((result) => {
                console.log(result.text);
                //Clean inputs
                document.querySelector("#inputName").value=" ";
                document.querySelector("#inputEmail").value= " ";
                document.querySelector("#inputMessage").value= " ";
                //Display message sended
                document.querySelector("#messageSended").style.display = "block";
            }, (error) => {
                console.log(error.text);
            });

    }

    // const handleSubmitButton = () => {
    //     const reload = document.querySelector("#reload");
    //     reload.addEventListener('click', _ => {
    //         alert('Message sended');
    //     });
    // }

    return (
        <section className="container contact-section mt-5">
            <article className="section-border p-3">
                <h3 className="section-headings text-center">Contact</h3>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-9">
                        <form ref={formRef} onSubmit={handleSubmit} id="form" >
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <div className="form-floating ">
                                        <input onChange={handlerName} id="inputName" className="form-control" type="text" name="name" placeholder="Name" />
                                        <label className="" htmlFor="name">Name</label>
                                        {errorName && <h5 id="requireName" className=" text-danger fs-6 mt-2 text-center">{errorName}</h5>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <div className="form-floating ">
                                        <input onChange={handleValidEmail} id="inputEmail" className="form-control" type="text" name="email" placeholder="email" />
                                        <label className="" htmlFor="email">email</label>
                                        {errorEmail && <h5 id="invalidEmail" className=" text-danger fs-6 mt-2 text-center">{errorEmail}</h5>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating ">
                                        <textarea onChange={handlerMessage} id="inputMessage" className="form-control textarea-contact" name="message" placeholder="Message">
                                        </textarea>
                                        <label htmlFor="message">Message</label>
                                        
                                        {errorMessage && <h5 id="requireMessage" className=" text-danger fs-6 mt-2 text-center">{errorMessage}</h5>}
                                        <h5 id="messageSended" className=" text-success fs-6 mt-2 text-center">Message sended</h5>                                    
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <input id="reload" className="sendButton" type="submit" value="Send" />
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

export default Contact;
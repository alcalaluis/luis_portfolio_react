import React from "react";
import "./style.css";

function Contact() {
    return (
        <div>
            <div className="row ">
                <div className="col-md-2 offset-md-5">
                    <ul className="contact-title">
                        <p>Let's get in touch!</p>
                    </ul>
                </div>
            </div>
            <div className="box container-fluid">
                <div className="row ">
                    <div className="col-md-6 offset-md-3">
                        <ul className="contact-link">
                            <p>(214) 802-8798</p>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="contact-link">
                        <a rel="noreferrer" target="_blank" className="contact-links" href="https://www.yahoo.com/">alcalaluis@rocketmail.com</a>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="contact-link">
                        <a rel="noreferrer" target="_blank" className="contact-links" href="https://www.linkedin.com/in/luis-alcala-004b45185/">Linkedin</a>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="contact-link">
                        <a rel="noreferrer" target="_blank" className="contact-links" href="https://github.com/alcalaluis">GitHub</a>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="contact-link">
                        <a rel="noreferrer" target="_blank" className="contact-links" href="https://drive.google.com/file/d/1XBGM0zA6VvJ9tMVejD-9N_1vCz1n00L7/view?usp=sharing">Resume</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;
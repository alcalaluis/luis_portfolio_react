import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
import Photo from "./brushing_50.png";
import PhotoTwo from "./brushing-25.png";

function About() {
    return (
        <div className="about-content row">
            <div className="col-md-4">
                <img className="center-block" src={Photo} alt="luis brushing teeth" />
            </div>
            <div className="col-md-6">
                <p className="bio">Hi, my name is Luis. I'm currently building my skills in web development with the goal of enhancing my career, family, and culture.
                My interests are all things creative, sports, music, stand up comedy, and running. I work for my family business that specializes in cumstom furniture carpentry. I hope your day is going well, and if it's over I hope it was a memorable one.</p>
                <img className="smaller-photo" src={PhotoTwo} alt="luis brushing teeth" />
            </div>
        </div>

    );

}

export default About;
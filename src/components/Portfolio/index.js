import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
import Corona from "./corona-survival.png";
import LinkUp from "./link-up.png";
import Store from "./online-store.png";
import Index from "./employee-index.png";
import CoronaSm from "./corona-25.png";
import IndexSm from "./employee-25.png";
import StoreSm from "./online-store-25.png";
import LinkUpSm from "./link-up-25.png";

function Portfolio() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img className="portfolio-sm" src={LinkUpSm} alt="link-up app" />
                    <img className="portfolio" src={LinkUp} alt="link-up app" /> rel="noreferrer"
                </div>
                <div className="col-md-6">
                    <h4  className="top-app-titles">Link Up Socializing App</h4><br />
                    <a rel="noreferrer" className="top-app-titles" href="https://github.com/mpapamichalis/link-it">GitHub Link</a><br />
                    <a rel="noreferrer" className="top-app-titles" href="https://link-up-pro.herokuapp.com/">Deployed App Link</a><br />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="portfolio-sm" src={IndexSm} alt="employee index app" />
                    <img className="portfolio" src={Index} alt="employee index app" />
                </div>
                <div className="col-md-6">
                    <h4 className="top-app-titles">Employee Directory</h4><br />
                    <a rel="noreferrer" className="top-app-titles" href="https://github.com/alcalaluis/grand-employee-archives">GitHub Link</a> <br />
                    <a  rel="noreferrer" className="top-app-titles" href="https://react-app-employee-archives.herokuapp.com/">Deployed App Link</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="portfolio-sm" src={StoreSm} alt="online store app" />
                    <img className="portfolio" src={Store} alt="online store app" />
                </div>
                <div className="col-md-6">
                    <h4 className="top-app-titles">Website for Selling Websites</h4><br />
                    <a rel="noreferrer" className="top-app-titles" href="https://github.com/adamhayward/online_store">GitHub Link</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="portfolio-sm" src={CoronaSm} alt="corona survival app" />
                    <img className="portfolio" src={Corona} alt="corona survival app" />
                </div>
                <div className="col-md-6">
                    <h4 className="app-titles">Corona Survival App</h4>
                    <a rel="noreferrer" className="app-titles" href="https://github.com/mpapamichalis/Corona-Survival">GitHub Link</a><br />
                    <a rel="noreferrer" className="app-titles" href="https://mpapamichalis.github.io/Corona-Survival/">Deployed App Link</a>
                </div>
            </div>
            
        </div>

    );

}

export default Portfolio;


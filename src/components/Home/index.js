import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";


function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 offset-md-5">
                    <h1 className="name">Luis Alcala</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-2 offset-md-5">
                <ul className="homebtn">
                    <NavLink className="btnlink" exact to="/about" >About</NavLink>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-5">
                <ul className="homebtn">
                    <NavLink className="btnlink" to="/portfolio" >Portfolio</NavLink>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-5">
                <ul className="homebtn">
                    <NavLink  className="btnlink" to="/contact" >Contact</NavLink>
                    </ul>
                </div>
            </div>
        </div>


    );

}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function Navbar() {
    return (
    <div>
    <nav className="navbar navbar-expand-md ">
            <div className="container-fluid">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Luis Alcala</Link>
                <div>
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"} aria-current="page">About</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
  
  export default Navbar;


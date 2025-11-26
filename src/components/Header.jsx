
import React, { useState } from "react";
import logoImage from '.././assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Header() {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Auto-close when a link is clicked
  };

  return (
    <nav style={{backgroundColor:"rgb(3 54 73 / 84%)"}} className="navbar navbar-expand-lg navbar-dark  shadow fixed-top custom-navbar" >
      <div className="container"><img src={logoImage} />
        <a className="navbar-brand" href="#home">Handyman Services</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span  className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${ expanded ? "show" : "" }`} id="navbarNav" >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleLinkClick}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking" onClick={handleLinkClick}>Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
        
      </div>
       
    </nav>
  )
}

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import logoImage from '.././assets/images/logo.png';

export default function BusinessCard()  {
  return (
    <div className="business-card">
      <div className="card-left">
         <h2>Handyman Services</h2>
        <p className="tagline">Reliable. Skilled. Affordable.</p>
        <ul className="services-list">
              <li>Painting</li>
              <li>Kitchen Remodel</li>
              <li>Basement Remodel</li>
              <li>Bathroom Remodel</li>
              <li>Emergency Services</li>
        
              <li>Plumbing</li>
              <li>AC & Furness</li>
              <li>Flooring & Tiles</li>
              <li>Spot Light Fitting</li>
              <li>Appliance Installation</li>
        </ul>
       
      </div>

      <div className="card-right">
       <div className="logo-name">
          <img src={logoImage} alt="Handyman Services Logo" className="business-logo" />
          <h2>Kalpesh Patel</h2>
       </div>
          
        <div className="contact-info">
          <p><FaPhone /> +1 (289) 968-8393</p>
          <p><FaEnvelope /> handymanontario59@gmail.com</p>
          <p><FaMapMarkerAlt /> Toronto, Canada</p>
        </div>

        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};



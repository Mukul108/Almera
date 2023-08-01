import React from "react";
import Image from "next/image";
import "./globals.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="column">
        <h4>Explore</h4>
        <ul>
          <li>Ideas</li>
          <li>Articles</li>
          <li>Research Papers</li>
        </ul>
      </div>
      <div className="column">
        <h4>Write</h4>
        <ul>
          <li>Ideas</li>
          <li>Articles</li>
          <li>Research Papers</li>
        </ul>
      </div>
      <div className="column">
        <h4>Learn More</h4>
        <ul>
          <li>Team</li>
          <li>Documentation</li>
          <li>Support us</li>
        </ul>
      </div>
      <div className="column">
        <ul className="social-icons">
          <li>
            <a href="#">
              <img src="../dis.svg" alt="Discord" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../git.svg" alt="Github" />
            </a>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
};

export default Footer;

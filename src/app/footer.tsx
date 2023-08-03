import React from "react";
import Image from "next/image";
import Dis from "../../public/dis.svg"
import Git from "../../public/git.svg"
import logo from "../../public/logo.png"
import "./globals.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer-section">
      <Image className="logoimg" src={logo}/>
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
          <li>Support us</li>
          <li>Message</li>
        </ul>
      </div>
      <div className="icon">
        <ul>
          <li>
            <Image  src={Dis}/>
          </li>
          <li>
            <Image src={Git} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

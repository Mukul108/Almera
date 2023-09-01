import React from "react";
import Image from "next/image";
import Dis from "../../../public/dis.svg"
import Git from "../../../public/git.svg"
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <div className="footer-section">
      <Image className="logoimg" src={logo} alt="logo"/>
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
            <Image  src={Dis} alt="Discord"/>
          </li>
          <li>
            <Image src={Git} alt="Github"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

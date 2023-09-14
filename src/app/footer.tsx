import React from "react";
import Image from "next/image";
import Dis from "../../public/dis.svg"
import Git from "../../public/git.svg"
import logo from "../../public/logo.png"

const Footer = () => {
  return (
    <div className="footer-section">
      <Image className="logoimg" src={logo} alt="logo"/>
      <div className="column">
        <h4>Explore</h4>
        <ul>
          <li>
            <a href="Read">
            Ideas
            </a>
          </li>
          <li>
            <a href="Read">
            Articles
            </a>
          </li>
          <li>
            <a href="Read">
            Research Paper
            </a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h4>Write</h4>
        <ul>
        <li>
            <a href="Write">
            Ideas
            </a>
        </li>
        <li>
            <a href="Write">
            Articles
            </a>
          </li>
          <li>
            <a href="Write">
            Research Paper
            </a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h4>Learn More</h4>
        <ul>
        <li>
            <a href="About">
            Team
            </a>
        </li>
        <li>
            <a href="Contact">
            Message
            </a>
          </li>
        <li>
            <a href="Contact">
            Support Us
            </a>
        </li>
        </ul>
      </div>
      <div className="icon">
        <ul>
          <li>
            <Image  src={Dis} alt="Discord"/>
          </li>
          <li>
            <a href="https://github.com/psycheai">
            <Image src={Git} alt="Github"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

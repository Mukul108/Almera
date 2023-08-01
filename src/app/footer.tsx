import React from "react";
import "./globals.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="column">
        <h4>Explore</h4>
        <ul>
          <li>Explore-Ideas</li>
          <li>Read-Articles</li>
          <li>Find-Research Papers</li>
        </ul>
      </div>
      <div className="column"> {/* New column */}
        <h4>Write</h4>
        <ul>
          <li>Write-Ideas</li>
          <li>Post-Articles</li>
          <li>Publish-Research Papers</li>
        </ul>
      </div>
      <div className="column"> {/* New column */}
        <h4>Learn More</h4>
        <ul>
          <li>Team</li>
          <li>Documentation</li>
          <li>Support us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer__container mar-top-sm">
      <div className="first-section">Add dummy footer text</div>
      <div className="second-section">
        <div className="company">
          <span>© 2021 Airbnb, Inc</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="extra">
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.css";

export default function Footer({ width }) {
  return (
    <div className="footer__container mar-top-sm">
      <div
        className="first-section"
        style={{
          maxWidth: `${width}`,
        }}
      >
        Add dummy footer text
      </div>
      <div
        className="second-section"
        style={{
          maxWidth: `${width}`,
        }}
      >
        <div className="company">
          <span>© 2021 Airbnb, Inc</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="extra">
          <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
}

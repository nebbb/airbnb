import React from "react";
import "./HostHome.css";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="try-hosting__container mar-top-sm">
      <div className="try-hosting__text-box">
        <h2 className="host-title">Try hosting</h2>
        <p className="host-text">
          Earn extra income and unlock new
          <br />
          opportunities by sharing your space.
        </p>
        <Link to="/application">
          <button className="host-btn mar-top-esm">Learn more</button>
        </Link>
      </div>
    </div>
  );
}

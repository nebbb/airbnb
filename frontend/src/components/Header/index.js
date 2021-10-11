import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="main-header__container">
      <div className="main-header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt="Logo"
          className="main-header-logo"
        />
      </div>
      <div className="main-header__search">
        <input
          type="text"
          className="main-header-search"
          placeholder="Search homes..."
        />
      </div>
      <div className="main-header__user-nav">
        <p>Become a host</p>
      </div>
    </div>
  );
}

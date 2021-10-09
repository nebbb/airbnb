import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./TypesHome.css";

function TypesHome() {
  return (
    <div className="types__container">
      <h2 className="explore-title mar-top-sm">Live anywhere</h2>
      <div className="types__homes-container">
        <div className="homes-card">
          <NavLink to="/ok">
            <img
              src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
              alt="Home"
              className="homes-img"
            />
          </NavLink>
          <p className="homes-text">Outdoor gateways</p>
        </div>
        <div className="homes-card">
          <NavLink to="/ok">
            <img
              src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
              alt="Home"
              className="homes-img"
            />
          </NavLink>
          <p className="homes-text">Unique stays</p>
        </div>
        <div className="homes-card">
          <NavLink to="/ok">
            <img
              src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
              alt="Home"
              className="homes-img"
            />
          </NavLink>
          <p className="homes-text">Entire homes</p>
        </div>
        <div className="homes-card">
          <NavLink to="/ok">
            <img
              src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
              alt="Home"
              className="homes-img"
            />
          </NavLink>
          <p className="homes-text">Pets allowed</p>
        </div>
      </div>
    </div>
  );
}

export default TypesHome;

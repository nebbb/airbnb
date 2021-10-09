import React from "react";
import "./DiscoverHome.css";
import { NavLink } from "react-router-dom";

export default function DiscoverHome() {
  return (
    <div className="discover-home__container">
      <h2 className="explore-title mar-top-sm">Discover things to do</h2>
      <div className="discover-card__container">
        <div className="discover-card">
          <NavLink to="ok">
            <img
              src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"
              alt="Discover"
              className="discover-img"
            />
          </NavLink>
          <p className="discover-text-1">Experiences</p>
          <p className="discover-text-2">
            Find unforgettable activities near you.
          </p>
        </div>
        <div className="discover-card">
          <NavLink to="ok">
            <img
              src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720"
              alt="Discover"
              className="discover-img"
            />
          </NavLink>
          <p className="discover-text-1">Online Experiences</p>
          <p className="discover-text-2">
            Live, interactive activities led by Hosts.
          </p>
        </div>
        <div className="discover-card">
          <NavLink to="ok">
            <img
              src="https://a0.muscache.com/im/pictures/3c2676df-0874-45a3-a82f-bbf57ccde1cc.jpg?im_w=720"
              alt="Discover"
              className="discover-img"
            />
          </NavLink>
          <p className="discover-text-1">Outdoor collection</p>
          <p className="discover-text-2">
            Experiences that immerse you in nature.
          </p>
        </div>
      </div>
    </div>
  );
}

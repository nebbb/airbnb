import React from "react";
import "./HeroHome.css";
import Navigation from "../Navigation";
import SearchHome from "../SearchHome";

function HeroHome({ isLoaded }) {
  return (
    <div className="hero_home-main">
      <Navigation isLoaded={isLoaded} />
      <SearchHome />
      <div className="hero_home-textbox">
        <h3 className="hero_home-tag">Not sure where to go? Perfect.</h3>
        <button className="hero_home-btn"><span className='hero_home-span'>I'm flexible</span></button>
      </div>
    </div>
  );
}

export default HeroHome;

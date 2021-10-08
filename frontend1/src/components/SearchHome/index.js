import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchHome.css";

function SearchHome() {
  const seperatorOne = document.querySelector(".search-seperator--1");
  const seperatorTwo = document.querySelector(".search-seperator--2");
  const seperatorThree = document.querySelector(".search-seperator--3");

  return (
    <div className="hero__search-main">
      <form className="search-form">
        <div
          className="input-box input-box--first"
          onMouseOut={(e) => (seperatorOne.style.backgroundColor = "#cecece")}
          onMouseOver={(e) =>
            (seperatorOne.style.backgroundColor = "transparent")
          }
        >
          <p>Location</p>
          <input
            className="search-input"
            placeholder="Where are you going?"
          ></input>
        </div>
        <div className="search-seperator search-seperator--1"></div>
        <div
          className="input-box input-box--second"
          onMouseOut={(e) => {
            seperatorOne.style.backgroundColor = "#cecece";
            seperatorTwo.style.backgroundColor = "#cecece";
          }}
          onMouseOver={(e) => {
            seperatorOne.style.backgroundColor = "transparent";
            seperatorTwo.style.backgroundColor = "transparent";
          }}
        >
          <p>Check in</p>
          <input className="search-input" placeholder="Add dates"></input>
        </div>
        <div className="search-seperator search-seperator--2"></div>
        <div
          className="input-box input-box--third"
          onMouseOut={(e) => {
            seperatorThree.style.backgroundColor = "#cecece";
            seperatorTwo.style.backgroundColor = "#cecece";
          }}
          onMouseOver={(e) => {
            seperatorThree.style.backgroundColor = "transparent";
            seperatorTwo.style.backgroundColor = "transparent";
          }}
        >
          <p>Check out</p>
          <input className="search-input" placeholder="Add dates"></input>
        </div>
        <div className="search-seperator search-seperator--3"></div>
        <div
          className="input-box--last input-box--fourth"
          onMouseOut={(e) => {
            seperatorThree.style.backgroundColor = "#cecece";
          }}
          onMouseOver={(e) => {
            seperatorThree.style.backgroundColor = "transparent";
          }}
        >
          <div className="input-box">
            <p>Guests</p>
            <input className="search-input" placeholder="Add Guests"></input>
          </div>
          <button className="search-main-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="22"
              height="22"
              viewBox="0 0 30 30"
              className="header--globe"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchHome;

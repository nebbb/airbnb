import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loadTheSearchedHomes } from "../../store/homes";
import { useHistory } from "react-router";

export default function Header() {
  let history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  let dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    history.push("/homes");
    dispatch(loadTheSearchedHomes(searchInput));
  };

  return (
    <div className="main-header__container">
      <div className="main-header__logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Logo"
            className="main-header-logo"
          />
        </Link>
      </div>
      <div className="main-header__search">
        <form onSubmit={onSubmit} className="please-flex">
          <input
            type="text"
            className="main-header-search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search homes..."
          />
          <button className="search-btn-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="22"
              height="22"
              viewBox="0 0 30 30"
              class="header--globe"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </form>
      </div>
      <div className="main-header__user-nav">
        <p>Become a host</p>
      </div>
    </div>
  );
}

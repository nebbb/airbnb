import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loadTheSearchedHomes } from "../../store/homes";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  let dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="main-header-search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search homes..."
          />
          <button>Search</button>
        </form>
      </div>
      <div className="main-header__user-nav">
        <p>Become a host</p>
      </div>
    </div>
  );
}

import React from "react";
import "./HomeCard.css";

export default function HomeCard({ home }) {
  return (
    <div className="home__card">
      <div className="home__card--leftside"></div>
      <div className="home__card--rightside">
        <div className="home__card--top">
          <div className="home__card--topleft">
            <p className="home__card--taglne">Entire cabin in Lock Haven</p>
            <h4 className="home__card--title">{home.name}</h4>
            <div className="home__card--seperator"></div>
            <p className="home__card--info">2 guests</p>
          </div>
          <div className="home__card--topright">
            <button>
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
        <div className="home__card--bottom">
          <div className="home__card--bottomleft">5 REVIEWS</div>
          <div className="home__card--bottomright">
            <span className="home__card--price-num">$129</span>
            <span className="home__card--price-text">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

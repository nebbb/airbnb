import React, { useState } from "react";
import { useEffect } from "react";
import "./HomeCard.css";

export default function HomeCard({ home }) {
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="home__card">
      <div className="home__card--leftside"></div>
      <div className="home__card--rightside">
        <div className="home__card--top">
          <div className="home__card--topleft">
            <p className="home__card--taglne">{`Home in ${home.state}`}</p>
            <h4 className="home__card--title">{home.name}</h4>
            <div className="home__card--seperator"></div>
            <p className="home__card--info">{home.info}</p>
          </div>
          <div className="home__card--topright">
            <button>
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
        <div className="home__card--bottom">
          <div className="home__card--bottomleft">{reviewCount}</div>
          <div className="home__card--bottomright">
            <span className="home__card--price-num">{home.price}</span>
            <span className="home__card--price-text">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

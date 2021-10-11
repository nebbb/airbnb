import React, { useState } from "react";
import { useEffect } from "react";
import "./HomeCard.css";
import { useSelector } from "react-redux";

export default function HomeCard({ home }) {
  const reviews = useSelector((state) => state.ratings);

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
          <div className="home__card--bottomleft">
            {reviews &&
              (reviews[home.id]?.avgRating === "NaN" ? (
                <div className="rating__container">No ratings.</div>
              ) : (
                <div className="rating__container">
                  <i className="fas fa-star"></i>
                  <p className="rating-tex">{reviews[home.id]?.avgRating}</p>
                  <p className="rating-par">{`(${reviews[home.id]?.length} ${
                    Number(reviews[home.id]?.length) > 1 ? "Reviews" : "Review"
                  }) `}</p>
                </div>
              ))}
          </div>
          <div className="home__card--bottomright">
            <span className="home__card--price-num">{home.price}</span>
            <span className="home__card--price-text">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

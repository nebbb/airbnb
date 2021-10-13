import React from "react";
import "./HomeCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadTheFavourites } from "../../store/favoutites";
import { addAFavourite } from "../../store/favoutites";
import { useHistory } from "react-router";
import { removeAFavourite } from "../../store/favoutites";

export default function HomeCard({ home }) {
  const reviews = useSelector((state) => state.ratings);
  const currUser = useSelector((state) => state.session.user);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  let history = useHistory();

  const removeFav = (e) => {
    e.preventDefault();
    if (!currUser) {
      history.push("/signup");
    } else {
      dispatch(removeAFavourite(currUser?.id, home.id));
    }
  };

  const addFav = (e) => {
    e.preventDefault();
    if (!currUser) {
      history.push("/signup");
    } else {
      dispatch(addAFavourite(currUser?.id, home.id));
    }
  };

  return (
    <div className="home__card">
      <div className="home__card--leftside"></div>
      <div className="home__card--rightside">
        <div className="home__card--top">
          <div className="home__card--topleft">
            <p className="home__card--taglne">{`${home.type} in ${home.state}`}</p>
            <h4 className="home__card--title">{home.name}</h4>
            <div className="home__card--seperator"></div>
            <p className="home__card--info">{home.info}</p>
          </div>
          <div className="home__card--topright">
            {Object.values(favourites).find(
              (fav) => fav.placeId === home.id && fav.userId === currUser?.id
            ) ? (
              <button className="heart__button" onClick={removeFav}>
                <i className="fas fa-heart"></i>
              </button>
            ) : (
              <button className="heart__button" onClick={addFav}>
                <i className="far fa-heart"></i>
              </button>
            )}
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

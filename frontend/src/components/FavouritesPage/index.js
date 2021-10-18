import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheHomes } from "../../store/homes";
import { Link } from "react-router-dom";
import "./FavouritesPage.css";
import { loadTheFavourites, removeAFavourite } from "../../store/favoutites";

export default function FavouritesPage() {
  const currUser = useSelector((state) => state.session.user);
  const favourites = useSelector((state) => state.favourites);
  const homes = useSelector((state) => state.homes);

  const removeFavourite = (e, fid, hid) => {
    e.preventDefault();
    dispatch(removeAFavourite(fid, hid));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTheFavourites());
    dispatch(loadTheHomes());
  }, []);

  return (
    <div className="favourites-page__container">
      <h1 className="favourites-title">My Favourites</h1>
      <div className="favourites-container">
        {favourites &&
          Object.values(favourites)
            .filter((fav) => {
              return fav.userId === currUser?.id;
            })
            .map((fav) => {
              return (
                <div key={fav.id} className="booking-row">
                  <Link to={`/homes/${fav.placeId}`}>
                    <div
                      className="booking-img"
                      style={{
                        backgroundImage: `url(${homes[fav.placeId]?.picOne})`,
                      }}
                    ></div>
                  </Link>
                  <div className="booking-txt">
                    <p className="home-name">{homes[fav.placeId]?.name}</p>
                    <button
                      className="remove-book"
                      onClick={(e) =>
                        removeFavourite(e, currUser.id, fav.placeId)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

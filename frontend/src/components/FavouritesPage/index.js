import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheFavourites, removeAFavourite } from "../../store/favoutites";

export default function FavouritesPage() {
  const currUser = useSelector((state) => state.session.user);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTheFavourites());
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
                <div key={fav.id} className="fav-row">
                  {fav.id}
                </div>
              );
            })}
      </div>
    </div>
  );
}

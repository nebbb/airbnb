import React, { useEffect, useState } from "react";
import "./HomesList.css";
import HomeCard from "../HomeCard";
import { loadTheHomes } from "../../store/homes";
import { loadTheRatings } from "../../store/ratings";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import {
  useLoadScript,
  InfoWindow,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import { useRef } from "react";
import GMStyles from "./GMJson";

export default function HomesList() {
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes);
  const reviews = useSelector((state) => state.ratings);

  const [currentSelectedHome, setCurrentSelectedHome] = useState(null);
  let allMarkers = Object.values(homes);

  const [mapContainerState, setMapContainerState] = useState(
    <button
      className="map__button-btn left"
      onClick={(e) => changeMapContainer(e)}
    >
      <i className="fas fa-chevron-left left"></i>
    </button>
  );

  const location = useLocation();
  const title = location.state?.title;
  const options = {
    styles: GMStyles,
  };

  const leftSideContainer = useRef(null);

  useEffect(() => {
    dispatch(loadTheHomes());
    dispatch(loadTheRatings());
    document.title = "Airbnb - Homes";
  }, [dispatch]);

  // Google map component
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB8XDkPLhgFSJy4rHox3c2BrHNZowRtTLU",
  });

  const changeMapContainer = (e) => {
    if (e.target.classList[1] === "left" || e.target.classList[2] === "left") {
      leftSideContainer.current.style.width = "0px";
      leftSideContainer.current.style.padding = "0px";
      setMapContainerState(
        <button
          className="map__button-btn right"
          onClick={(e) => changeMapContainer(e)}
        >
          <i className="fas fa-chevron-right right"></i>
          <p>Show List</p>
        </button>
      );
    } else {
      leftSideContainer.current.style.width = "76rem";
      leftSideContainer.current.style.padding = "2rem";
      setMapContainerState(
        <button
          className="map__button-btn left"
          onClick={(e) => changeMapContainer(e)}
        >
          <i className="fas fa-chevron-left left"></i>
        </button>
      );
    }
  };

  return (
    <>
      <Header />
      <div className="homes-list__container">
        <div ref={leftSideContainer} className="homes-list-leftside">
          <div className="homes-container">
            <p className="mar-top-esm">300+ stays</p>
            <h2>{title ? title : "All homes"}</h2>
            <div className="homes-list-filter">
              <button>Free cancellation</button>
              <button>Entire place</button>
              <button>Price</button>
              <button>Time posted</button>
            </div>
            <div className="homes-list-flex">
              {homes ? (
                Object.values(homes).map((home) => (
                  <NavLink key={home.id} to={`/homes/${home.id}`}>
                    <HomeCard home={home} />
                  </NavLink>
                ))
              ) : (
                <h1 className="mar-top-esm">No homes :(</h1>
              )}
            </div>
          </div>
        </div>
        <div className="homes-list-rightside">
          <div className="map__container">
            {!isLoaded ? (
              "Loading"
            ) : (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={10}
                center={
                  allMarkers[0] && { lat: +homes[1]?.lat, lng: +homes[1]?.long }
                }
                options={options}
              >
                {allMarkers &&
                  allMarkers.map((marker) => {
                    return (
                      <Marker
                        onClick={() => setCurrentSelectedHome(marker)}
                        position={{ lat: +marker?.lat, lng: +marker?.long }}
                        key={marker?.id}
                        icon={{
                          url: "/home-marker.svg",
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(31, 10),
                          scaledSize: new window.google.maps.Size(60, 60),
                        }}
                      ></Marker>
                    );
                  })}

                {currentSelectedHome ? (
                  <InfoWindow
                    position={{
                      lat: +currentSelectedHome.lat,
                      lng: +currentSelectedHome.long,
                    }}
                    onCloseClick={() => {
                      setCurrentSelectedHome(null);
                    }}
                  >
                    <div className="marker__container">
                      <div className="marker__top">
                        <img
                          className="marker--img"
                          src="https://a0.muscache.com/im/pictures/3b767a00-9753-4b7c-8413-a24e32f316b7.jpg?im_w=720"
                          alt="Home"
                        />
                      </div>
                      <div className="marker__bottom">
                        <div className="rating__container">
                          <i className="fas fa-star"></i>
                          {reviews[currentSelectedHome.id].avgRating ===
                          "NaN" ? (
                            "No reviews"
                          ) : (
                            <div className="rating__container">
                              <p className="rating-tex">
                                {reviews[currentSelectedHome.id]?.avgRating}
                              </p>
                              <p className="rating-par">{`(${
                                reviews[currentSelectedHome.id]?.length
                              } ${
                                Number(
                                  reviews[currentSelectedHome.id]?.length
                                ) > 1
                                  ? "Reviews"
                                  : "Review"
                              }) `}</p>
                            </div>
                          )}
                        </div>
                        <p>{currentSelectedHome.name}</p>
                        <div>
                          <span className="home__card--price-num span-text">
                            {currentSelectedHome.price}
                          </span>
                          <span className="home__card--price-text span-text">
                            / night
                          </span>
                        </div>
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </GoogleMap>
            )}
            <div className="map__button">{mapContainerState}</div>
          </div>
        </div>
      </div>
    </>
  );
}

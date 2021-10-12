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
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useRef } from "react";

export default function HomesList() {
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes);

  let homesMarkerArray = Object.values(homes);
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

  const leftSideContainer = useRef(null);

  useEffect(() => {
    dispatch(loadTheHomes());
    dispatch(loadTheRatings());
    document.title = "Airbnb - Homes";
  }, [dispatch]);

  function leftSideMap() {
    return (
      <GoogleMap
        defaultCenter={{
          lat: 40.712776,
          lng: -74.005974,
        }}
        defaultZoom={10}
      >
        {homesMarkerArray.map((home) => (
          <Marker
            key={home.id}
            position={{ lat: Number(home.lat), lng: Number(home.long) }}
          />
        ))}
      </GoogleMap>
    );
  }

  const LeftSideMapWrapper = withScriptjs(withGoogleMap(leftSideMap));

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
            <LeftSideMapWrapper
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8XDkPLhgFSJy4rHox3c2BrHNZowRtTLU"
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
            <div className="map__button">{mapContainerState}</div>
            <div className="map__button2">{mapContainerState}</div>
          </div>
        </div>
      </div>
    </>
  );
}

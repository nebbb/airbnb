import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import HeroHome from "./components/HeroHome";
import ExploreHome from "./components/ExploreHome";
import TypesHome from "./components/TypesHome";
import HostHome from "./components/HostHome";
import DiscoverHome from "./components/DiscoverHome";
import Footer from "./components/Footer";
import HomesList from "./components/HomesList";
import HomeForm from "./components/HomeForm";
import SingleHome from "./components/SingleHome";
import Header from "./components/Header";
import EditHome from "./components/EditHome";
import ProfilePage from "./components/ProfilePage";
import ApplicationPage from "./components/ApplicationPage";
import AdminPage from "./components/AdminPage";
import BookingsPage from "./components/BookingsPage";
import FavouritesPage from "./components/FavouritesPage";
import Navigation from "./components/Navigation";
import ProfilePageSingle from "./components/ProfilePageSingle";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeroHome isLoaded={isLoaded} />
          <div className="main__content-wrapper">
            <ExploreHome />
            <TypesHome />
            <HostHome />
            <DiscoverHome />
          </div>
          <Footer width={"150rem"} />
        </Route>
        <Route path="/homes/:homeId/edit">
          <EditHome />
        </Route>
        <Route exact path="/homes">
          <Header isLoaded={isLoaded} />
          <HomesList />
        </Route>
        <Route exact path="/bookings">
          <Header isLoaded={isLoaded} />
          <div className="main__content-wrapper">
            <BookingsPage />
          </div>
        </Route>
        <Route exact path="/favourites">
          <Header isLoaded={isLoaded} />
          <div className="main__content-wrapper">
            <FavouritesPage />
          </div>
        </Route>
        <Route path="/profile/:profileId">
          <Header isLoaded={isLoaded} />
          <div className="main__content-wrapper--tighter">
            <ProfilePage />
          </div>
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/profile">
          <Header isLoaded={isLoaded} />
          <div className="main__content-wrapper--tighter">
            <ProfilePageSingle />
          </div>
        </Route>
        <Route path="/homes/:homeId">
          <Header isLoaded={isLoaded} />
          <div className="main__content-wrapper--tighter">
            <SingleHome />
          </div>
          <Footer width={"100rem"} />
        </Route>
        <Route path="/application">
          <ApplicationPage />
        </Route>
        <Route path="/create">
          <HomeForm />
        </Route>
        {isLoaded && (
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        )}
        <Route>404 Not Found</Route>
      </Switch>
    </>
  );
}

export default App;

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
import ApplicationForm from "./components/ApplicationForm";
import HomeForm from "./components/HomeForm";
import SingleHome from "./components/SingleHome";
import Header from "./components/Header";
import EditHome from "./components/EditHome";
import ProfilePage from "./components/ProfilePage";
import ApplicationPage from "./components/ApplicationPage";

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
          <HomesList />
        </Route>
        <Route path="/profile/:profileId">
          <Header />
          <div className="main__content-wrapper--tighter">
            <ProfilePage />
          </div>
        </Route>
        {/* <Route path="/profile">
          <Header />
          <div className="main__content-wrapper--tighter">
            <ProfilePage />
          </div>
        </Route> */}
        <Route path="/homes/:homeId">
          <Header />
          <div className="main__content-wrapper--tighter">
            <SingleHome />
          </div>
          <Footer width={"100rem"} />
        </Route>
        <Route path="/application">
          <ApplicationForm />
        </Route>
        <Route path="/applicationpage">
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

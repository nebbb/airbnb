import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import HeroHome from "./components/HeroHome";
import ExploreHome from "./components/ExploreHome";

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
          </div>
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

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import homesReducer from "./homes";
import ratingsReducer from "./ratings";
import favouritesReducer from "./favoutites";
import reviewsReducer from "./reviews";
import usersReducer from "./users";
import applicationsReducer from "./applications";
import bookingsReducer from "./bookings";

const rootReducer = combineReducers({
  session: sessionReducer,
  homes: homesReducer,
  ratings: ratingsReducer,
  favourites: favouritesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  applications: applicationsReducer,
  bookings: bookingsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

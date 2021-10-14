import { csrfFetch } from "./csrf";
const LOAD_FAVOURITES = "favourites/LOAD";
const REMOVE_FAVOURITES = "favourites/REMOVE";
const ADD_A_FAVOURITE = "favourite/ADDONE";

const loadFavourites = (data) => {
  return {
    type: LOAD_FAVOURITES,
    data,
  };
};

const removeFavourites = (data) => {
  return {
    type: REMOVE_FAVOURITES,
    data,
  };
};

const addFavourite = (data) => {
  return {
    type: ADD_A_FAVOURITE,
    data,
  };
};

export const loadTheFavourites = () => async (dispatch) => {
  const allFavourites = await fetch("/api/favourites/all");
  const allFavouritesArray = await allFavourites.json();
  dispatch(loadFavourites(allFavouritesArray));
};

export const addAFavourite = (userId, placeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/favourites/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, placeId }),
  });
  if (response.ok) {
    const addded = await response.json();
    dispatch(addFavourite(addded));
    return addded;
  }
};

export const removeAFavourite = (id, homeid) => async (dispatch) => {
  const response = await csrfFetch(`/api/favourites/${id}/${homeid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const removed = await response.json();
    dispatch(removeFavourites(removed));
    return removed;
  }
};

const initialState = {};

const favouritesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_FAVOURITES: {
      newState = { ...state };
      action.data.forEach((fav, i) => {
        newState[i + 1] = fav;
      });
      return newState;
    }
    case REMOVE_FAVOURITES: {
      newState = {};
      action.data.forEach((fav, i) => {
        newState[i + 1] = fav;
      });
      return newState;
    }
    case ADD_A_FAVOURITE: {
      newState = {};
      action.data.forEach((fav, i) => {
        newState[i + 1] = fav;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default favouritesReducer;

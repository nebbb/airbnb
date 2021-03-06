import { csrfFetch } from "./csrf";
const LOAD_HOMES = "homes/LOAD";
const SEARCH_HOMES = "homes/SEARCH";
const LOAD_ONE = "homes/ONE";
const FILTER_HOMES = "homes/FILTER";
const UPDATE_HOME = "homes/update";
const REMOVE_HOME = "homes/REMOVE";

export const filterHomes = (data) => {
  return {
    type: FILTER_HOMES,
    data,
  };
};

const loadHomes = (data) => {
  return {
    type: LOAD_HOMES,
    data,
  };
};
const updateHomes = (data) => {
  return {
    type: UPDATE_HOME,
    data,
  };
};

const removeHomes = (data) => {
  return {
    type: REMOVE_HOME,
    data,
  };
};
const searchHomes = (data) => {
  return {
    type: SEARCH_HOMES,
    data,
  };
};
const loadOne = (data) => {
  return {
    type: LOAD_ONE,
    data,
  };
};
export const loadTheHomes = () => async (dispatch) => {
  const response = await fetch("/api/places/all");
  if (response.ok) {
    const data = await response.json();
    dispatch(loadHomes(data.allPlaces));
  }
};

export const addAHome = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/places`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataA = await response.json();
  dispatch(loadOne(dataA));
  return dataA;
};

export const updateAHome = (id, data) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataA = await response.json();
  dispatch(updateHomes(dataA));
  return dataA;
};

export const removeAHome = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/${id}`, {
    method: "DELETE",
  });
  const dataA = await response.json();
  dispatch(removeHomes(dataA));

  return dataA;
};

export const loadTheSearchedHomes = (term) => async (dispatch) => {
  const response = await fetch(`/api/search/${term}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(searchHomes(data.searchResults));
  }
};

const initialState = {};

const homesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_HOMES: {
      newState = { ...state };
      action.data.forEach((home) => {
        newState[home.id] = home;
      });
      return newState;
    }
    case LOAD_ONE: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case SEARCH_HOMES: {
      newState = {};
      action.data.forEach((home) => {
        newState[home.id] = home;
      });
      return newState;
    }
    case REMOVE_HOME: {
      newState = { ...state };
      delete newState[action.data.id];
      return newState;
    }
    case UPDATE_HOME: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case FILTER_HOMES: {
      newState = { ...state };
      newState[action.data.num] = { id: 6, name: "test" };
      return newState;
    }
    default:
      return state;
  }
};

export default homesReducer;

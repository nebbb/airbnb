const LOAD_HOMES = "homes/LOAD";
const SEARCH_HOMES = "home/SEARCH";

const loadHomes = (data) => {
  return {
    type: LOAD_HOMES,
    data,
  };
};
const searchHomes = (data) => {
  return {
    type: SEARCH_HOMES,
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
    case SEARCH_HOMES: {
      newState = {};
      action.data.forEach((home) => {
        newState[home.id] = home;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default homesReducer;

const LOAD_HOMES = "homes/LOAD";
const LOAD_HOME = "home/LOAD";

const loadHomes = (data) => {
  return {
    type: LOAD_HOMES,
    data,
  };
};

// const loadHome = (data) => {
//   return {
//     type: LOAD_HOME,
//     data,
//   };
// };

export const loadTheHomes = () => async (dispatch) => {
  const response = await fetch("/api/places/all");
  if (response.ok) {
    const data = await response.json();
    dispatch(loadHomes(data.allPlaces));
  }
};

// export const loadTheHome = (homeId) => async (dispatch) => {
//   const response = await fetch(`/api/places/place/${homeId}`);
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(loadHome(data.specificPlace));
//   }
// };

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
    default:
      return state;
  }
};

export default homesReducer;

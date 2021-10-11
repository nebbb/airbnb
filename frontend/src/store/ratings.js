const LOAD_RATINGS = "ratings/LOAD";

const loadRatings = (data) => {
  return {
    type: LOAD_RATINGS,
    data,
  };
};

export const loadTheRatings = () => async (dispatch, getState) => {
  // Get average reviews for all places
  let allRatingsArray = [];
  const allPlaces = await fetch(`/api/places/all`);
  const allPlacesArray = await allPlaces.json();

  for (const iterator of allPlacesArray.allPlaces) {
    const currentPlaceRating = await fetch(
      `/api/reviews/rating/${iterator.id}`
    );
    const data = await currentPlaceRating.json();
    allRatingsArray.push(data);
  }
  dispatch(loadRatings(allRatingsArray));
};

const initialState = {};

const ratingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_RATINGS: {
      newState = { ...state };
      action.data.forEach((rating) => {
        newState[rating.placeId] = rating;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default ratingsReducer;

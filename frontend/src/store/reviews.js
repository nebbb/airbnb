import { csrfFetch } from "./csrf";

const LOAD_REVIWES = "reviews/LOAD";
const REMOVE_REVIWES = "reviews/DELETE";
const EDIT_REVIWES = "reviews/EDIT";
const ADD_REVIWES = "reviews/ADD";

const loadReviews = (data) => {
  return {
    type: LOAD_REVIWES,
    data,
  };
};

const deleteReviews = (data) => {
  return {
    type: REMOVE_REVIWES,
    data,
  };
};

const editReviews = (data) => {
  return {
    type: EDIT_REVIWES,
    data,
  };
};

const addReviews = (data) => {
  return {
    type: ADD_REVIWES,
    data,
  };
};

export const loadTheReviews = (id) => async (dispatch, getState) => {
  // Get average reviews for all places
  const allreviews = await fetch(`/api/reviews/place/${id}`);
  const allreviewsarray = await allreviews.json();
  dispatch(loadReviews(allreviewsarray));
};

export const deleteTheReviews = (id) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/reviews/review/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  dispatch(deleteReviews(data));
};

export const editTheReviews = (id, Adata) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/review/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review: Adata }),
  });
  const data = await response.json();

  dispatch(editReviews(data));
  return data;
};

export const addTheReviews = (Adata) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Adata),
  });
  const data = await response.json();

  dispatch(addReviews(data));
  return data;
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_REVIWES: {
      newState = {};
      action.data.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    }
    case REMOVE_REVIWES: {
      newState = { ...state };
      delete newState[action.data];
      return newState;
    }
    case EDIT_REVIWES: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case ADD_REVIWES: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    default:
      return state;
  }
};

export default reviewsReducer;

import { csrfFetch } from "./csrf";
const LOAD_BOOKINGS = "bookings/LOAD";
const ADD_BOOKING = "bookings/ADD";
const REMOVE_BOOKING = "bookings/REMOVE";

const loadBookings = (data) => {
  return {
    type: LOAD_BOOKINGS,
    data,
  };
};

const addBookings = (data) => {
  return {
    type: ADD_BOOKING,
    data,
  };
};

const removeBookings = (data) => {
  return {
    type: REMOVE_BOOKING,
    data,
  };
};

export const loadTheBookings = (id) => async (dispatch) => {
  const allbookings = await fetch(`/api/bookings/user/${id}`);
  const allbookingsarray = await allbookings.json();
  dispatch(loadBookings(allbookingsarray));
};

export const addTheBookings = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataA = await response.json();
  dispatch(addBookings(dataA));
  return dataA;
};

export const removeTheBookings = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: "DELETE",
  });
  const dataA = await response.json();
  dispatch(removeBookings(dataA));
  return dataA;
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_BOOKINGS: {
      newState = { ...state };
      action.data.forEach((booking) => {
        newState[booking.id] = booking;
      });
      return newState;
    }
    case ADD_BOOKING: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case REMOVE_BOOKING: {
      newState = { ...state };
      delete newState[action.data];
      return newState;
    }
    default:
      return state;
  }
};

export default bookingsReducer;

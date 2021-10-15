import { csrfFetch } from "./csrf";
const LOAD_APPLICATIONS = "applications/LOAD";
const ADD_APPLICATION = "applications/ADD";
const UPDATE_USER = "applications/UPDATE";

const loadApplications = (data) => {
  return {
    type: LOAD_APPLICATIONS,
    data,
  };
};

const addApplication = (data) => {
  return {
    type: ADD_APPLICATION,
    data,
  };
};

const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    data,
  };
};

export const loadTheApplications = () => async (dispatch) => {
  const allApplications = await fetch(`/api/applications/all`);
  const allApplicationsArray = await allApplications.json();
  dispatch(loadApplications(allApplicationsArray));
};

export const updateAUser = (Adata) => async (dispatch) => {
  const { userId, id } = Adata;

  const response = await csrfFetch(`/api/applications/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Adata),
  });
  const data = await response.json();

  dispatch(updateUser(id));
};

export const addTheApplication = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataA = await response.json();
  dispatch(addApplication(dataA));
  return dataA;
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_APPLICATIONS: {
      newState = { ...state };
      action.data.forEach((application) => {
        newState[application.id] = application;
      });

      return newState;
    }
    case ADD_APPLICATION: {
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;
    }
    case UPDATE_USER: {
      newState = { ...state };
      delete newState[action.data];
      return newState;
    }
    default:
      return state;
  }
};

export default bookingsReducer;

import { csrfFetch } from "./csrf";
const LOAD_APPLICATIONS = "applications/LOAD";
const ADD_APPLICATION = "applications/ADD";

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

export const loadTheApplications = () => async (dispatch) => {
  const allApplications = await fetch(`/api/applications/all`);
  const allApplicationsArray = await allApplications.json();
  dispatch(loadApplications(allApplicationsArray));
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

const applicationsReducer = (state = initialState, action) => {
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
      action.data.forEach((application) => {
        newState[application.id] = application;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default applicationsReducer;

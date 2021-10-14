const LOAD_USERS = "users/LOAD";

const loadUsers = (data) => {
  return {
    type: LOAD_USERS,
    data,
  };
};

export const loadTheUsers = () => async (dispatch, getState) => {
  const allusers = await fetch(`/api/users/all`);
  const allusersarray = await allusers.json();
  dispatch(loadUsers(allusersarray));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USERS: {
      newState = { ...state };
      action.data.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default usersReducer;

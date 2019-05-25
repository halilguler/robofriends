import { CHANGE_SEARCH_FIELD } from "../constants/";
export const INITIAL_STATE = {
  searchField: ""
};

export const searchRobots = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

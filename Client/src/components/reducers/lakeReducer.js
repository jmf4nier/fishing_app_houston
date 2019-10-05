import { FETCH_LAKES, CURRENT_LAKE } from "../actions/types";

const initialState = {
  lakes: [],
  currentLake: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LAKES:
      return {
        ...state,
        lakes: action.payload
      };
    case CURRENT_LAKE:
      return {
        ...state,
        currentLake: action.payload
      };
    default:
      return state;
  }
}

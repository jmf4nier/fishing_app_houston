import { FETCH_LAKES } from "./types";
import { CURRENT_LAKE } from "./types";

export const fetchLakes = (dispatch) =>  {
  fetch("https://jasonserverhoustonfishing.herokuapp.com/lakes/")
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: FETCH_LAKES,
        payload: result
      })
    );
};
export const currentLake = (dispatch, lake) => {
  dispatch({
    type: CURRENT_LAKE,
    payload: lake
  });
};
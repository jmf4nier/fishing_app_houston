import { FETCH_LAKES, CURRENT_LAKE, FAVORITED_LAKE, REMOVE_LAKE } from "./types";

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
export const favoritedLake = (dispatch, lake) => {
  dispatch({
    type: FAVORITED_LAKE,
    payload: lake
  });
};
export const removeLake = (dispatch, lake) => {
  dispatch({
    type: REMOVE_LAKE,
    payload: lake
  });
};
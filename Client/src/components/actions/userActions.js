import {
  POST_USER,
  LOGIN_USER,
  SHOW_LOGIN,
  SHOW_SIGNUP,
  LOGOUT_USER
} from "./types";

export const postUser = data => async dispatch => {
  console.log(data);
  let res = await fetch("http://localhost:5000/users/signup", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: data.password,
      username: data.username,
      email: data.email
    })
  });
  let result = await res.json();
  dispatch({
    type: POST_USER,
    payload: result
  });
};
export const loginUser = data => async dispatch => {
  console.log(data);
  let res = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: data.password,
      email: data.email
    })
  });
  let result = await res.json();
  window.localStorage.setItem("token", result.token);
  dispatch({
    type: LOGIN_USER,
    payload: result
  });
  // .then(res => res.json())
  // .then(result => {
  //     window.localStorage.setItem('token', result.token)
  //     dispatch({
  //         type: LOGIN_USER,
  //         payload: result
  //     })
  // })
};
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
    payload: ""
  });
};
export const showLogin = state => dispatch => {
  console.log(state);
  dispatch({
    type: SHOW_LOGIN,
    payload: state
  });
};
export const showSignup = state => dispatch => {
  console.log(state);
  dispatch({
    type: SHOW_SIGNUP,
    payload: state
  });
};

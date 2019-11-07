import { FETCH_MESSAGES, POST_MESSAGE, PATCH_MESSAGE } from "../actions/types";

export const fetchMessages = id => dispatch => {
  const url = new URL("https://jasonserverhoustonfishing.herokuapp.com/messages/");
  const params = { lake_id: id };
  // sets the passed in lake_id to params for the request for access in the server.
  url.search = new URLSearchParams(params);
  fetch(url)
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: FETCH_MESSAGES,
        payload: result
      })
    );
};
export const postMessage = data => dispatch => {
  console.log(data);
  fetch("https://jasonserverhoustonfishing.herokuapp.com/messages/add", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lake_id: data.lake_id,
      replies: data.replies,
      author: data.author,
      content: data.content,
      date: data.date
    })
  })
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: POST_MESSAGE,
        payload: result
      })
    );
};
export const patchMessage = data => dispatch => {
  console.log(data);
  fetch("https://jasonserverhoustonfishing.herokuapp.com/messages/update/" + data.message_id, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reply: data.reply
    })
  })
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: PATCH_MESSAGE,
        payload: result
      })
    );
};

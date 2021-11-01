import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  ACCEPT_MOVIE,
  REJECT_MOVIE,
} from "./types";

export const getMovies = () => (dispatch) => {
  const requestOptions = {
    method: "get",
  };
  dispatch({
    type: GET_MOVIES,
  });
  fetch(`http://localhost:3000/recommendations`, requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: data,
          });
        });
      } else {
        dispatch({
          type: GET_MOVIES_FAILED,
          payload: response.statusText,
        });
        alert("server status: " + response.statusText + ". Please check server-json.");
      }
    })
    .catch((err) => {
      throw err;
    });
};

import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  ACCEPT_MOVIE,
  REJECT_MOVIE,
  REMOVE_USED_RECOMENDATIONS,
} from "./types";

export const getMovies = (page) => (dispatch) => {
  console.log(page);
  const requestOptions = {
    method: "get",
  };
  dispatch({
    type: GET_MOVIES,
  });
  fetch(`https://server-json-watch.herokuapp.com/recommendations?_page=${page}&_limit=5`, requestOptions)
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
export const removeLastMovie = () => (dispatch) => {
  dispatch({
    type:REMOVE_USED_RECOMENDATIONS
  })
}

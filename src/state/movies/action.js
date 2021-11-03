import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  ACCEPT_MOVIE,
  REJECT_MOVIE,
  REMOVE_USED_RECOMENDATIONS,
} from "./types";

export const getMovies = (page) => (dispatch) => {
  const requestOptions = {
    method: "get",
  };
  dispatch({
    type: GET_MOVIES,
  });
  fetch(
    `${process.env.REACT_APP_API_URL}/recommendations?_page=${page}&_limit=5`,
    requestOptions
  )
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
        alert(
          "server status: " +
            response.statusText +
            ". Please check server-json."
        );
      }
    })
    .catch((err) => {
      throw err;
    });
};
export const removeLastMovie = () => (dispatch) => {
  dispatch({
    type: REMOVE_USED_RECOMENDATIONS,
  });
};
export const acceptMovie = (ID) => (dispatch) => {
  const data = {
    ID,
  };
  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(`${process.env.REACT_APP_API_URL}/accepted`, requestOptions)
    .then((data) => {
      dispatch({
        type: ACCEPT_MOVIE,
      });
    })
    .catch((err) => {
      throw err;
    });
};
export const rejectMovie = (ID) => (dispatch) => {
  const data = {
    movieID: ID,
  };
  console.log(data);
  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(`${process.env.REACT_APP_API_URL}/rejected`, requestOptions)
    .then((data) => {
      dispatch({
        type: REJECT_MOVIE,
      });
    })
    .catch((err) => {
      throw err;
    });
};

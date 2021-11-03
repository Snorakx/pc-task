import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  ACCEPT_MOVIE,
  REJECT_MOVIE,
  REMOVE_USED_RECOMENDATIONS,
} from "./types";

const initialState = {
  moviesLoading: false,
  moviesLoaded: false,
  moviesList: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoading: true,
        moviesLoaded: false,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviesLoading: false,
        moviesLoaded: true,
        moviesList: [...action.payload, ...state.moviesList],
      };
    case GET_MOVIES_FAILED:
      return {
        ...state,
        moviesLoading: false,
        moviesLoaded: false,
      };
      case ACCEPT_MOVIE:
      return {
        ...state,
        moviesLoading: false,
        moviesLoaded: false,
      };
      case REJECT_MOVIE:
        return {
          ...state,
          moviesLoading: false,
          moviesLoaded: false,
        };
    case REMOVE_USED_RECOMENDATIONS:
      const cloneMoviesList = [...state.moviesList];
      cloneMoviesList.pop();
      return {
        ...state,
        moviesList: cloneMoviesList,
      };
    default:
      return state;
  }
}

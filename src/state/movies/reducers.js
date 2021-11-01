import { GET_MOVIES, GET_MOVIES_FAILED, GET_MOVIES_SUCCESS, ACCEPT_MOVIE, REJECT_MOVIE } from "./types";


const initialState = {
    moviesLoading:false,
    moviesLoaded:false,
    moviesList:[],
  };


export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MOVIES:
        return {
        ...state,
        moviesLoading:true,
        moviesLoaded:false,
        };
    case GET_MOVIES_SUCCESS:
        return {
        ...state,
        moviesLoading:false,
        moviesLoaded:true,
        moviesList: action.payload
        };
    case GET_MOVIES_FAILED:
        return {
        ...state,
        moviesLoading:false,
        moviesLoaded:false,
        };
    default:
        return state;
    }
};
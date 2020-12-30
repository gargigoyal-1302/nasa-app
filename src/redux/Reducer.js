import {
  GET_ASTEROID_ID,
  GET_ASTEROID_ID_FAILED,
  GET_ASTEROID_DETAILS,
  GET_ASTEROID_DETAILS_FAILED,
} from "./ActionsType";

const initialState = {
  users: [],
  asteroid: [],
  loading: true,
  error: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASTEROID_ID:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_ASTEROID_ID_FAILED:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: action.payload,
      };
    case GET_ASTEROID_DETAILS:
      return {
        ...state,
        asteroid: action.payload,
        loading: false,
      };
    case GET_ASTEROID_DETAILS_FAILED:
      return {
        ...state,
        asteroid: action.payload,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

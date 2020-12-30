import {
  GET_ASTEROID_ID,
  GET_ASTEROID_ID_FAILED,
  GET_ASTEROID_DETAILS,
  GET_ASTEROID_DETAILS_FAILED,
} from "./ActionsType";

import { getAsteroidApi, AsteroidDetailsApi } from "../services";

export const getAsteroidAction = () => {
  return async (dispatch) => {
    await getAsteroidApi()
      .then((response) => {
        dispatch({
          type: GET_ASTEROID_ID,
          payload: response.data.near_earth_objects,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ASTEROID_ID_FAILED,
          payload: error.message,
        });
      });
  };
};

export const getAsteroidDetails = (id) => {
  return async (dispatch) => {
    await AsteroidDetailsApi(id)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ASTEROID_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ASTEROID_DETAILS_FAILED,
          payload: error.message,
        });
      });
  };
};

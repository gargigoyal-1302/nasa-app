import Axios from "axios";

export const getAsteroidApi = () => {
  return Axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
  );
};

export const AsteroidDetailsApi = (asteroidId) => {
  console.log(asteroidId);
  return Axios.get(
    `http://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
};

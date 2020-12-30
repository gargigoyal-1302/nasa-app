import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAsteroidDetails } from "../redux/Actions";

function AsteroidDetails() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsteroidDetails(`${id}`));
  }, []);

  const asteroidData = useSelector((state) => state?.asteroid);
  console.log(asteroidData);
  return (
    <div>
      {asteroidData && (
        <>
          <h1>Here is your asteroid Details !!</h1>
          <table className="table">
            <tbody>
              <tr>
                <th>Name of Asteroid</th>
                <td>{asteroidData.name}</td>
              </tr>
              <tr>
                <th>ID of Asteroid</th>
                <td>{asteroidData.id}</td>
              </tr>
              <tr>
                <th>Nasa JPL URL</th>
                <td>{asteroidData.nasa_jpl_url}</td>
              </tr>
              <tr>
                <th>Is potentially hazardous Asteroid</th>
                <td>{asteroidData.designation}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default AsteroidDetails;

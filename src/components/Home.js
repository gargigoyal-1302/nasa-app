import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { getAsteroidAction } from "../redux/Actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsteroidAction());
  }, []);

  const apiData = useSelector((state) => state);
  console.log(apiData);
  const [value, setValue] = useState();
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    value !== "" ? setDisabled(false) : setDisabled(true);
  };

  const handleRandomClick = () => {
    value !== "" ? setDisabled(false) : setDisabled(true);

    const asteroidData = apiData?.users;
    console.log(asteroidData);
    const randomData =
      asteroidData[Math.floor(Math.random() * asteroidData.length)];

    const randomId = randomData.id;
    setValue(randomId);
  };
  return (
    <div className="body">
      <div>
        <TextField
          id="standard-basic"
          placeholder="Enter Asteroid ID"
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className="ml-4 mt-1.5"
          onClick={handleRandomClick}
        >
          Random Asteroid
        </Button>
      </div>
      <br />
      <div>
        {disabled ? (
          <Link to="/" className="btn btn-danger">
            Submit
          </Link>
        ) : (
          <Link to={`/details/${value}`} className="btn btn-danger">
            Submit
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;

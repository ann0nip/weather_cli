import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import { getCurrent, getForecast } from "../utils/api";
import { WeatherContext } from "../context/WeatherContext";
import ButtonComponent from "./ButtonComponent";
import WeatherDetails from "./WeatherDetails";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#7db4fc",
    borderRadius: 6,
    width: 380,
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  searchNav: {
    display: "flex",
    padding: 10,
    borderRadius: 6,
  },
  submitBtn: {
    backgroundColor: "#363636",
    color: "#FFF",
    marginLeft: 10,
  },
  formGroup: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 15,
  },
}));
const componentsStyles = {
  submitBtn: {
    backgroundColor: "#363636",
    color: "#FFF",
    marginLeft: 10,
  },
};

// WeatherCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default function WeatherCard(props) {
  const classes = useStyles();
  const index = props.ix;
  const { weather, setWeather } = useContext(WeatherContext);
  const [city, setCity] = React.useState();

  const fetchData = async (event) => {
    event.preventDefault();
    const current = await getCurrent(city);
    const forecast = await getForecast(city);
    let weatherCopy = [...weather];
    weatherCopy[index] = { current, forecast };
    setWeather(weatherCopy);
  };

  return (
    <Paper className={classes.paper}>
      <FormGroup className={classes.formGroup}>
        <Paper elevation={0} className={classes.searchNav}>
          <TextField
            id="city_name"
            label="City Name"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <ButtonComponent
            onClick={fetchData}
            style={componentsStyles.submitBtn}
            text="Search"
          />
        </Paper>
      </FormGroup>
      {Object.keys(weather[index]).length > 0 && (
        <WeatherDetails data={weather[index]} />
      )}
    </Paper>
  );
}

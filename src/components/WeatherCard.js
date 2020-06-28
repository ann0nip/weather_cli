import React, { useContext } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { WeatherContext } from "../context/WeatherContext";
import WeatherDetails from "./WeatherDetails";

const WEATHER_API_URL = "http://localhost:3000/api/v1";
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
      <form onSubmit={fetchData} noValidate autoComplete="off">
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
            <Button className={classes.submitBtn} type="submit">
              Search
            </Button>
          </Paper>
        </FormGroup>
      </form>
      {Object.keys(weather[index]).length > 0 && (
        <WeatherDetails data={weather[index]} />
      )}
    </Paper>
  );
}

function getCurrent(city = "") {
  try {
    return fetch(`${WEATHER_API_URL}/current/${city}`)
      .then((res) => res.json())
      .then((weather) => weather);
  } catch (error) {
    throw new Error("Error: " + error);
  }
}

function getForecast(city = "") {
  try {
    return fetch(`${WEATHER_API_URL}/forecast/${city}`)
      .then((res) => res.json())
      .then((res) => {
        let date = null;
        // Each day has data every 3 hours, so I filter just one per day.
        const forecast = res.list.filter((el) => {
          const day = moment(el.dt_txt).format("DD");
          if (day !== date) {
            date = day;
            return el;
          }
        });
        // I noticed openweathermap return 6 days forecast
        // because include the actual day. So, I just remove the first one.
        forecast.shift();
        return forecast;
      });
  } catch (error) {
    throw new Error("Error: " + error);
  }
}

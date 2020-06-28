import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    marginTop: 10,
    backgroundColor: "#7db4fc",
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 55,
    backgroundSize: "auto",
  },
  forecastIcon: {
    height: 55,
    width: 55,
    backgroundSize: 55,
  },
  divider: {
    margin: 10,
  },
});

export default function WeatherDetails(props) {
  const classes = useStyles();
  const {
    current: { city, weather, more },
    forecast,
  } = props.data;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body1" display={"inline"}>
          {city},
        </Typography>
        <span> </span>
        <Typography variant={"body1"} display={"inline"}>
          {moment(new Date()).format("ll")}
        </Typography>
        <br></br>
        <Typography variant={"h6"} display={"inline"}>
          {weather[0].main},
        </Typography>
        <span> </span>
        <Typography variant={"h6"} display={"inline"}>
          {Math.trunc(more.temp)} Cº
        </Typography>
        <CardMedia
          className={classes.media}
          image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          title={weather[0].description}
        />
        <List>
          {forecast.map((el) => {
            return (
              <div>
                <ListItem>
                  <ListItemText primary={moment(el.dt_txt).format("MMM Do")} />
                  <ListItemText
                    primary={`${Math.trunc(el.main.temp_max)} Cº`}
                  />
                  <CardMedia
                    className={classes.forecastIcon}
                    image={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                    title={el.weather[0].description}
                  />
                </ListItem>
                <Divider variant="middle" />
              </div>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

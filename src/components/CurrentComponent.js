import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 55,
    backgroundSize: "auto",
  },
});
export default function CurrentComponent({ data }) {
  const classes = useStyles();
  const { city, weather, more } = data;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

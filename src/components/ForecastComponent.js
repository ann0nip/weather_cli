import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Divider, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  forecastIcon: {
    height: 55,
    width: 55,
    backgroundSize: 55,
  },
});

export default function ForecastComponent({ data }) {
  const {
    dt_txt,
    main: { temp_max },
    weather: [{ icon, description }],
  } = data;
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={moment(dt_txt).format("MMM Do")} />
        <ListItemText primary={`${Math.trunc(temp_max)} Cº`} />
        <CardMedia
          className={classes.forecastIcon}
          image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          title={description}
        />
      </ListItem>
      <Divider variant="middle" />
    </React.Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, List, Typography } from "@material-ui/core";

import CurrentComponent from "./CurrentComponent";
import ForecastComponent from "./ForecastComponent";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    marginTop: 10,
    backgroundColor: "#7db4fc",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 55,
    backgroundSize: "auto",
  },
  divider: {
    margin: 10,
  },
});

export default function WeatherDetails(props) {
  const classes = useStyles();
  const { current, forecast } = props.data;

  if (forecast.status === 503)
    return (
      <Card className={classes.root}>
        <Typography variant="button" color="error">
          {forecast.message}
        </Typography>
      </Card>
    );

  return (
    <Card className={classes.root}>
      <CardContent>
        <CurrentComponent data={current} />
        <List>
          {forecast.map((el, k) => (
            <ForecastComponent key={k} data={el} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

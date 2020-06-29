import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, List } from "@material-ui/core";

import CurrentComponent from "./CurrentComponent";
import ForecastComponent from "./ForecastComponent";

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
  divider: {
    margin: 10,
  },
});

export default function WeatherDetails(props) {
  const classes = useStyles();
  const { current, forecast } = props.data;

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

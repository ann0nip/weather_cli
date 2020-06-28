import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    marginTop: 10,
    backgroundColor: "#7db4fc",
  },
  title: {
    fontSize: 14,
  },
});

export default function WeatherDetails(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Details
        </Typography>
        {JSON.stringify(props.data)}
      </CardContent>
    </Card>
  );
}

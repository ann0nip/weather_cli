import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import WeatherCard from "./WeatherCard";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 6,
    backgroundColor: "#7db4fc",
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

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default function Panel() {
  const classes = useStyles();
  const [city, setCity] = React.useState();

  const fetchData = (event) => {
    event.preventDefault();
    console.log(city);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
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

          <WeatherCard></WeatherCard>
        </Paper>
      </Grid>
    </Grid>
  );
}

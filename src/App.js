import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import WeatherCard from "./components/WeatherCard";

import { WeatherContext } from "./context/WeatherContext";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2em",
    margin: 15,
    color: "#363636",
    fontFamily: "nunito",
    textDecoration: "underline",
  },
  gridCards: {
    justifyContent: "space-around",
  },
}));

function App() {
  const classes = useStyles();
  const [weather, setWeather] = useState([{}]);
  const value = useMemo(() => ({ weather, setWeather }), [weather, setWeather]);

  function addNewCity() {
    setWeather([...weather, {}]);
  }

  return (
    <WeatherContext.Provider value={value}>
      <Container maxWidth="lg">
        <Box>
          <Typography className={classes.title} component="h1" align="center">
            Weather App
          </Typography>
          <Grid
            container
            item
            spacing={1}
            style={{ justifyContent: "flex-end" }}
          >
            <Button onClick={addNewCity} variant="outlined" size="large">
              New City
            </Button>
          </Grid>
          <Grid container spacing={1}>
            <Grid className={classes.gridCards} container item xs={12}>
              {weather.map((p, k) => {
                return <WeatherCard key={k} ix={k} />;
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </WeatherContext.Provider>
  );
}

export default App;

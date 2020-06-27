import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Panel from "./components/Panel";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2em",
    margin: 15,
    color: "#363636",
    fontFamily: "nunito",
    textDecoration: "underline",
  },
}));

function App() {
  const classes = useStyles();
  const [panels, setPanels] = React.useState([1]);
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography className={classes.title} component="h1" align="center">
          Weather App
        </Typography>
        {panels.map((p) => {
          return <Panel />;
        })}
      </Box>
    </Container>
  );
}

export default App;

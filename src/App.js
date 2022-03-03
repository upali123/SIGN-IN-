import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "block",
    margin: "auto",
    marginTop: "12px",
    width: "24rem",

    // marginLeft: "500px",
  },
});
function App() {
  const classes = useStyles();
  return (
    <>
      <form className="form">
        <h1>
          <img
            className="img"
            src="blindly.png"
            alt="Foo Co.: Where everyone can fizz the buzz"
          />
        </h1>
        <input className="input" placeholder="Email Address*"></input>
        <br></br>
        <input className="input" placeholder="Password*"></input>
      </form>
      <Button className={classes.button} variant="contained" color="primary">
        SIGN IN
      </Button>

      <h6 className="inputs">Forgot password?</h6>
      <a href="google.com" className="privacy">
        Privacy
      </a>
      <a href="google.com" className="t">
        Terms & Conditions
      </a>
    </>
  );
}

export default App;

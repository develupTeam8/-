import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    width: "500px",
    height: "60px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#ffc03b",
    borderColor: "#ffc03b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#FDBD2F",
      borderColor: "#FDBD2F",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ffc03b",
      borderColor: "#ffc03b"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255,192,59,.5)"
    }
  }
})(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        등록하기
      </BootstrapButton>
    </div>
  );
}

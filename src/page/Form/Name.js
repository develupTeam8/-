import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      width: "500px",
      color: "#ffc03b"
    },
    "& .MuiInput-underline": {
      width: "500px",
      borderBottomColor: "#ffc03b"
    },
    "& .MuiInput-underline:after": {
      width: "500px",
      borderBottomColor: "#ffc03b"
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="상품명"
      />
    </form>
  );
}

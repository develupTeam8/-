import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
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
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 500
  }
}));

export default function InputAdornments() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <CssTextField
          label="가격"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end">원</InputAdornment>
          }}
        />
        <FormControl
          className={clsx(
            classes.margin,
            classes.withoutLabel,
            classes.textField
          )}
        ></FormControl>
      </div>
    </div>
  );
}

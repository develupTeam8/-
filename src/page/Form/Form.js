import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffc03b"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffc03b"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        width: "500px",
        height: "190px",
        borderColor: "#ffc03b"
      },
      "& .MuiInputBase-input": {
        width: "470px"
      },
      "&:hover fieldset": {
        width: "500px",
        borderColor: "#ffc03b"
      },
      "&.Mui-focused fieldset": {
        width: "500px",
        borderColor: "#ffc03b"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "200px"
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
        label="글 내용"
        variant="outlined"
        id="custom-css-outlined-input"
      />
    </form>
  );
}

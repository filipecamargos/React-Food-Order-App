import React from "react";

import classes from "./Input.module.css";

//Customer input to use in forms in the app
//This input component is configured throught props and ref
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

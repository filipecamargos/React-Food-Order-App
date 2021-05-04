import { useRef, useState } from "react";

import classes from "./MealsForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const endeterdAmountValue = +enteredAmount;

    if (endeterdAmountValue < 1 || endeterdAmountValue > 6) {
      setValidAmount(false);
      return;
    }

    props.onAddToCart(endeterdAmountValue);
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add Meal</button>
      {!validAmount && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;

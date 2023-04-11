import { useState } from "react";

import classes from "./Checkout.module.css";

import Input from "../../UI/Input";

const Checkout = (props) => {
  const [values, setValues] = useState({
    name: "",
    street: "",
    postalcode: "",
    city: "",
  });

  const inputs = [
    {
      id: "01",
      name: "name",
      label: "Your Name",
      errormsg: "field can't be empty",
    },
    {
      id: "02",
      name: "street",
      label: "Street",
      errormsg: "field can't be empty",
    },
    {
      id: "03",
      name: "postalcode",
      label: "Postal Code",
      errormsg: "postal code must have 5 chars",
    },
    {
      id: "04",
      name: "city",
      label: "City",
      errormsg: "field can't be empty",
    },
  ];

  const [inputIsValid, setInputIsValid] = useState({
    name: true,
    street: true,
    postalcode: true,
    city: true,
  });

  let formIsValid = false;

  const valuesHandler = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const inputValidationHandler = (name) => {
    let valid;
    if (name === "postalcode") {
      valid = values[name].trim().length === 5;
    } else {
      valid = values[name].trim() !== "";
    }
    setInputIsValid((prev) => ({ ...prev, [name]: valid }));
    if (!valid) {
      formIsValid = false;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    formIsValid = true;

    for (const key in inputIsValid) {
      inputValidationHandler(key);
    }

    if (!formIsValid) {
      return;
    }

    props.onConfirm(values);

    for (const key in values) {
      values[key] = "";
    }
  };

  const inputClasses = (name) => {
    return inputIsValid[name]
      ? classes.control
      : `${classes.control} ${classes.invalid}`;
  };

  const enterClickHandler = (e) => {
    e.key === "Enter" && e.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandler}
      onKeyDown={enterClickHandler}
      className={classes.form}
    >
      <div className={classes["controls-section"]}>
        {inputs.map((i) => (
          <Input
            input={{
              ...i,
              value: values[i.name],
              onChange: valuesHandler,
            }}
            className={inputClasses(i.name)}
            label={i.label}
            key={i.id}
            inputIsInvalid={inputIsValid[i.name]}
          />
        ))}
      </div>
      <div className={classes.active}>
        <button
          onClick={props.onClick}
          className={`${classes.btn} ${classes["btn-close"]}`}
        >
          Cancel
        </button>
        <button className={`${classes.btn} ${classes["btn-order"]}`}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

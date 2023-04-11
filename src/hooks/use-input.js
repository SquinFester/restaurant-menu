import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(value);

  const hasError = !valueIsValid && isTouched;

  const valueHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setisTouched(true);
  };

  const reset = () => {
    setValue("");
    setisTouched(false);
  };

  return { value, hasError, valueIsValid, valueHandler, blurHandler, reset };
};

export default useInput;

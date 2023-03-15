import { useState, useEffect } from "react";

interface PasswordValidatorProps {
  password: string;
  setValid: (valid: boolean) => void;
}

const PasswordValidator = (props: PasswordValidatorProps) => {
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const validatePassword = (password: string) => {
    if (password === "") {
      setMessage("");
      setValid(false);
      return false;
    }

    // Password Length
    else if (password.length < 10) {
      setMessage("Your password has to include at least 10 digits");
      setValid(false)
      return false;
    }

    // Lower-Case Letter
    else if (password.search(/[a-z]/) < 0) {
      setMessage(
        "Your password has to include at least one lower-case letter"
      );
      setValid(false)
      return false;
    }

    // Upper-Case Letter
    else if (password.search(/[A-Z]/) < 0) {
      setMessage(
        "Your password has to include at least one upper-case letter"
      );
      setValid(false)
      return false;
    }

    // Special Digit
    else if (password.search(/[!#$%&?"]/) < 0) {
      setMessage(
        'Your password has to include at least one of the following special digits: ! # $ % & ? " '
      );
      setValid(false)
      return false;
    }

    // Special Digit
    else if (password.search(/[0-9]/) < 0) {
      setMessage("Your password has to include at least one Number");
      setValid(false)
      return false;
    }

    // Requirements fulfilled
    else {
      setMessage("Your password fulfills all requirements");
      setValid(true)
      return true;
    }
  };

  useEffect(() => {
    const isValid = validatePassword(props.password);
    props.setValid(isValid);
  }, [props.password]);

  const onPasswordChange = (event) => {
    const password = event.target.value;
    const isValid = validatePassword(password);
    props.setValid(isValid);
  };

  return (
    <div>
      <div style={{ color: valid ? "green" : "red" }}>{message}</div>
    </div>
  );
};

export default PasswordValidator;
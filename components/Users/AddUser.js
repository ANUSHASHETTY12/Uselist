import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrappers from "../HELPERS/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHAndle = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Ivalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Ivalid age",
        message: "Please enter a valid  age(>0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrappers>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHAndle}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="numbers" ref={ageInputRef}></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrappers>
  );
};

export default AddUser;

import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const enteredNameRef = useRef("");
  const enteredAgeRef = useRef("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({title: "Empty Field", content: "Please enter Name."});
      return;
    }
    if (enteredAge.trim().length === 0) {
      setError({title: "Empty Field", content: "Please enter Age."});
      return;
    }
    if (+enteredAge < 1) {
      setError({title: "Invalid age", content: "Please enter age above 0"});
      return;
    }
    props.onAddUserHandler(enteredName, enteredAge);
  
    enteredNameRef.current.value = "";
    enteredAgeRef.current.value = "";
    // setEnteredName("");
    // setEnteredAge("");
  }

  const errorClickHandler = () => {
    setError(null);
  }

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  return (
    <React.Fragment>
      { error && <ErrorModal onClickHandler={errorClickHandler} title={error.title} content={error.content} /> }
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={enteredNameRef} /*value={enteredName} onChange={nameChangeHandler}*/ />
          <label htmlFor="age">Age</label>
          <input type="number" ref={enteredAgeRef} /*value={enteredAge} onChange={ageChangeHandler}*/ />
          <Button type="submit"> Submit </Button>
        </form>
      </Card>
    </React.Fragment>
    
  );
}

export default AddUser;
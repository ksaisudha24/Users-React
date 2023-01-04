import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onClickHandler}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}><p>{props.content}</p></div>
        <footer>
        <Button className={styles.actions} onClick={props.onClickHandler}> Okay
        </Button>
        </footer>
        
      </Card>
    </React.Fragment>
  )
}

export default ErrorModal;
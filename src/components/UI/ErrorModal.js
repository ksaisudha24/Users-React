import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClickHandler}></div>
}
const ModalOverlay = (props) => {
  return (
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
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(<Backdrop onClickHandler={props.onClickHandler} />, document.getElementById("backdrop-root"))
      }
      {
        ReactDOM.createPortal(<ModalOverlay title={props.title} content={props.content} onClickHandler={props.onClickHandler} />, document.getElementById("overlay-root"))
      }
    </React.Fragment>
  )
}

export default ErrorModal;
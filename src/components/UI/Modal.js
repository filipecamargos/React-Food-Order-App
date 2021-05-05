import { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

//Style the background
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

//Set the modelOverley
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};  

//varible to get the portal that was created in the index.html
const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portal)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;

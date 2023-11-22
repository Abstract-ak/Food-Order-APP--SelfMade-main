// import Fragment from 'react';
import { Fragment } from 'react';
import classes from './Modal.module.css';
// import { ReactDOM } from 'react-dom';
import ReactDOM from "react-dom";

const Backdrop = () => {
    console.log("hello")
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

const portalElement = document.getElementById("overlays")
console.log("Portal", portalElement);

const Modal = (props) => {
    return(
    <Fragment>
        { ReactDOM.createPortal(<Backdrop/>, portalElement)}
        { ReactDOM.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalElement)}
    </Fragment>
    )
};

export default Modal;
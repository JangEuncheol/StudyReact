import React from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-header"]}>
        {props.modalHeaderContents}
        </div>
      <div className={styles["modal-body"]}>
        {props.modalBodyContents}
      </div>
    </div>
  );
};

export default Modal;

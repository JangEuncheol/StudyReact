import React from "react";

import styles from "./Box.module.css";

const Box = (props) => {
    return <div className={styles.box}>
      {props.children}
    </div>
};

export default Box;
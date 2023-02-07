import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
      {/* <h3>{data.title}</h3>
      <p className={classes.description}>{data.desc}</p>
      <p className={classes.price}>{`${data.price}$`}</p> */}
    </div>
  );
};

export default Card;

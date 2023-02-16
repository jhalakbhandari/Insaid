import React from "react";
import classes from "./ReviewCard.module.css";
function ReviewCard(props) {
  return <div className={classes.reviewcard}>{props.children}</div>;
}

export default ReviewCard;

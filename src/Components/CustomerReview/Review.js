import React, { useState } from "react";
import ReviewCard from "../UI/ReviewCard.js";
import classes from "./Review.module.css";
import AddIcon from "@mui/icons-material/Add";
function Review() {
  const [addReview, setAddReview] = useState(false);
  const addReviewHandler = () => {
    setAddReview(true);
  };

  return (
    <div className={classes.review}>
      <h1>CUSTOMER REVIEWS</h1>
      <div className={classes.container}>
        <ReviewCard>
          <div className={classes.reviewtext}>
            loremipsum doler set dcshbhabcjkhn
          </div>
          <div className={classes.reviewer}>~Jhalak</div>
        </ReviewCard>
        <ReviewCard>
          <div className={classes.reviewtext}>
            loremipsum doler set dcshbhabcjkhn
          </div>
          <div className={classes.reviewer}>~Jhalak</div>
        </ReviewCard>
        <ReviewCard>
          <div className={classes.reviewtext}>
            loremipsum doler set dcshbhabcjkhn
          </div>
          <div className={classes.reviewer}>~Jhalak</div>
        </ReviewCard>
        <AddIcon onClick={addReviewHandler} />
        {addReview && (
          <form>
            <input />
            <input />
          </form>
        )}
      </div>
    </div>
  );
}

export default Review;

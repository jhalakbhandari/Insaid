import React from "react";
import { Link } from "react-router-dom";
import Review from "../Components/CustomerReview/Review";
import Button from "../Components/UI/Button";
import Category from "./Category";
import classes from "./Home.module.css";
function HomePage() {
  return (
    <div class="wrapper">
      {/* INTRO & OFFERS*/}
      <div className={classes.welcome}>
        <h1>Buy your favorite jewelry!</h1>

        <Link to="/contact">
          <Button>For customized jewelry, Contact </Button>
        </Link>
      </div>
      {/*  CATEGORY OF JEWELLERY*/}
      <div>
        <Category />
      </div>
      {/*Customer reviews */}
      <div>
        <Review />
      </div>
      {/*Footer */}
    </div>
  );
}

export default HomePage;

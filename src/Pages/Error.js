import React from "react";
import Navbar from "../Components/UI/Navbar";
import classes from "./Error.module.css";
function Errorpage() {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default Errorpage;

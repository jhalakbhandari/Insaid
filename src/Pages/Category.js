import React from "react";
import classes from "./Category.module.css";
import earrings from "../Asset/Images/earrings.jpg";
import layerednecklace from "../Asset/Images/layerednecklace.jpg";
import rings from "../Asset/Images/rings.jpg";
import Card from "../Components/UI/Card";
function Category() {
  return (
    <div className={classes.category}>
      <h2>Shop by category</h2>
      <div className={classes.container}>
        <Card>
          <img src={earrings} alt="earrings"></img>
          <p className={classes.jeweleryname}>earrings</p>
        </Card>
        <Card>
          <img src={layerednecklace} alt="layerednecklace"></img>
          <p className={classes.jeweleryname}>layered necklace</p>
        </Card>
        <Card>
          <img src={rings} alt="rings"></img>
          <p className={classes.jeweleryname}>rings</p>
        </Card>
      </div>
    </div>
  );
}

export default Category;

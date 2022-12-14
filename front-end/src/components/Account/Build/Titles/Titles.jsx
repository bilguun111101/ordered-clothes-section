import React from "react";
import css from "./titles-style.module.scss";

const Titles = () => {
  return (
    <div className={css.titles}>
      <div className={css.titles__product}>
        <h4>Products</h4>
      </div>
      <div className={css.titles__title}>
        <h4>Date</h4>
        <h4>Order number</h4>
        <h4>QTY</h4>
        <h4>Address</h4>
        <h4>State</h4>
      </div>
    </div>
  );
};

export default Titles;

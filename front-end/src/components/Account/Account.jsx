import React from "react";
import css from "./Account-style.module.scss";
import Titles from "./Build/Titles/Titles";
import Product from "./Build/Product/Product";

const Account = () => {
  return (
    <section className={css.account_section}>
      <div className={css.account_section__title_section}>
        <h1>MY ORDERED CLOTHES</h1>
      </div>
      <div className={css.account_section__history_section}>
        <Titles />
        <div className={css.account_section__history_section__products}>
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Account;

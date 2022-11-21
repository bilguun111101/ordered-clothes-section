import React from 'react';
import Titles from "./Build";
import css from "./Ordered-style.module.scss";

const Ordered = () => {
  return (
    <section className={css.ordered_section}>
        <div className={css.ordered_section__title_section}>
            <h1>MY ORDERED CLOTHES</h1>
        </div>
        <div className={css.ordered_section__history_section}>
            <Titles />
        </div>
    </section>
  )
}

export default Ordered
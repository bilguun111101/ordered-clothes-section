import React from "react";
import css from "./product-style.module.scss";

const Product = () => {
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img
            src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
            alt=""
          />
          {/* <h4>Jeans jacket</h4> */}
          <div className={css.orderSection__container__imgSection__document}>
            <h4>Wide leg pants</h4>
            <div className={css.sizeAndPrice}>
              <h4>S | USD 650.00</h4>
            </div>
          </div>
        </div>
        {/* first */}
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <p>Black</p>{" "}
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>XXL</p>
                <img
                  src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/8f484581fe23075eeaa72c97788988164f20d0bf/frontend/src/assets/images/arrow-down-black.svg"
                  alt=""
                />
              </button>
            </div>
            <p>1</p>
            {/* <button>remove</button> */}
            <p className={css.address}>
              Ulaanbaatar, Mongolia 120 apartment 12 district, 120-35
            </p>
            <p>Packed</p>
          </div>
        </div>
        {/* second */}
        <div className={css.orderSection__container__phoneDocumentSection}>
          <button className={css.removeBtn}>
            <img
              src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/8f484581fe23075eeaa72c97788988164f20d0bf/frontend/src/assets/images/close-black.svg"
              alt=""
            />
          </button>
          <h3>Wide leg pants</h3>
          <p>USD 650.00 | Black</p>
          <div className={css.sizeAndQuantity}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>XXL</p>
                <img
                  src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/8f484581fe23075eeaa72c97788988164f20d0bf/frontend/src/assets/images/arrow-down-black.svg"
                  alt=""
                />
              </button>
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>1</p>
                <img
                  src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/8f484581fe23075eeaa72c97788988164f20d0bf/frontend/src/assets/images/arrow-down-black.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

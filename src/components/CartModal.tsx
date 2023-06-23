import React, { useCallback, useContext, useState } from "react";
import CartContext from "../context/cart-context";
import FoodInCart from "./FoodInCart";
import styles from "./CartModal.module.css";

type Props = {
  modalCloseHandler: () => void;
};

const url = "https://react-http-36f4d-default-rtdb.firebaseio.com/carts.json";

const CartModal = (props: Props) => {
  const cartCtx = useContext(CartContext);
  const { modalCloseHandler } = props;

  const submit = useCallback(async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartCtx.foodsInCart),
    });
    if (response.ok) {
      cartCtx.resetCart();
      modalCloseHandler();
    }
  }, [cartCtx, modalCloseHandler]);

  const onSubmitHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      submit();
    },
    [submit]
  );

  return (
    <div className={styles["cart-modal"]} onClick={modalCloseHandler}>
      <section
        className={styles["cart-modal-body"]}
        onClick={(event) => event.stopPropagation()}
      >
        <ul className={styles["food-container"]}>
          {cartCtx.foodsInCart.map((food) => (
            <FoodInCart food={food} />
          ))}
        </ul>
        <p className={styles["p-container"]}>
          <span className={styles["total-amount-title"]}>Total Amount</span>
          <span className={styles["total-amount"]}>
            ${cartCtx.getTotaoPrice()}
          </span>
        </p>
        <div className={styles["button-container"]}>
          <button
            className={`${styles.button} ${styles["close-button"]}`}
            onClick={modalCloseHandler}
          >
            Close
          </button>
          <button
            className={`${styles.button} ${styles["order-button"]}`}
            onClick={onSubmitHandler}
          >
            Order
          </button>
        </div>
      </section>
    </div>
  );
};
export default CartModal;

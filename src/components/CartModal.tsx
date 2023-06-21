import { useContext } from "react";
import CartContext from "../context/cart-context";
import FoodInCart from "./FoodInCart";
import styles from "./CartModal.module.css";

type Props = {
  modalCloseHandler: () => void;
};

const CartModal = (props: Props) => {
  const cartCtx = useContext(CartContext);
  const { modalCloseHandler } = props;

  return (
    <div className={styles["cart-modal"]} onClick={modalCloseHandler}>
      <section
        className={styles["cart-modal-body"]}
        onClick={(event) => event.stopPropagation()}
      >
        <ul className={styles['food-container']}>
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
          <button className={`${styles.button} ${styles["order-button"]}`}>
            Order
          </button>
        </div>
      </section>
    </div>
  );
};
export default CartModal;

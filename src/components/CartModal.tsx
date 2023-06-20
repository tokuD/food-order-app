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
        <ul>
          {cartCtx.foodsInCart.map((food) => (
            <FoodInCart food={food} />
          ))}
        </ul>
        <p>
          <span>Total Amount</span>
          <span>${cartCtx.getTotaoPrice()}</span>
        </p>
      </section>
    </div>
  );
};
export default CartModal;

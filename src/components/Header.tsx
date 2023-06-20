import styles from "./Header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CartContext from "../context/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);
  return (
    <header className={styles["header-container"]}>
      <h1 className={styles["header-title"]}>ReactMeals</h1>
      <button className={styles.cart}>
        <IconContext.Provider value={{ className: styles["cart-icon"] }}>
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <span>YourCart</span>
        <span className={styles["amount-tip"]}>
          {cartCtx.foodsInCart
            .map((food) => food.amount)
            .reduce((total, amount) => total + amount, 0)}
        </span>
      </button>
    </header>
  );
};

export default Header;

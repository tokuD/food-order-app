import styles from "./Header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CartContext from "../context/cart-context";

type Props = {
  modalOpenHandler: () => void;
};

const Header = (props: Props) => {
  const cartCtx = useContext(CartContext);
  const { modalOpenHandler } = props;
  return (
    <header className={styles["header-container"]}>
      <h1 className={styles["header-title"]}>ReactMeals</h1>
      <button className={styles.cart} onClick={modalOpenHandler}>
        <IconContext.Provider value={{ className: styles["cart-icon"] }}>
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <span>YourCart</span>
        <span className={styles["amount-tip"]}>{cartCtx.getTotalAmount()}</span>
      </button>
    </header>
  );
};

export default Header;

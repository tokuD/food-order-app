import styles from "./Header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <h1 className={styles["header-title"]}>ReactMeals</h1>
      <button className={styles.cart}>
        <IconContext.Provider value={{ className: styles["cart-icon"] }}>
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <span>YourCart</span>
        <span className={styles["amount-tip"]}>2</span>
      </button>
    </header>
  );
};

export default Header;

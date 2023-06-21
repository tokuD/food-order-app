import React, { useContext } from "react";
import { FoodInCartType } from "../types/cart-types";
import styles from "./FoodInCart.module.css";
import CartContext from "../context/cart-context";

type Props = {
  food: FoodInCartType;
};

const FoodInCart = (props: Props) => {
  const cartCtx = useContext(CartContext);
  const { food } = props;

  const onRemoveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    cartCtx.removeFood(food);
  };

  const onAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    cartCtx.addFood(food);
  };

  return (
    <li className={styles["food-container"]}>
      <div className={styles["column-1"]}>
        <h4 className={styles["food-name"]}>{food.name}</h4>
        <p className={styles["food-price"]}>${food.price}</p>
      </div>
      <div className={styles["column-2"]}>
        <span className={styles["food-amount"]}>&times;{food.amount}</span>
      </div>
      <div className={styles["column-3"]}>
        <button onClick={onRemoveHandler} className={styles.button}>
          &minus;
        </button>
        <button onClick={onAddHandler} className={styles.button}>
          +
        </button>
      </div>
    </li>
  );
};

export default FoodInCart;

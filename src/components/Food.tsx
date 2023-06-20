import React, { useCallback, useContext } from "react";
import styles from "./Food.module.css";
import CartContext from "../context/cart-context";
import { FoodType } from "../types/food-type";

type Props = {
  food: FoodType;
};

const Food = (props: Props) => {
  const cartCtx = useContext(CartContext);
  const { food } = props;

  const onAddHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      cartCtx.addFood(food);
    },
    [cartCtx, food]
  );

  const onRemoveHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      cartCtx.removeFood(food);
    },
    [cartCtx, food]
  );

  return (
    <li className={styles["food-card"]}>
      <div className={styles["food-container"]}>
        <h3 className={styles["food-name"]}>{food.name}</h3>
        <p className={styles["food-description"]}>{food.description}</p>
        <p className={styles["food-price"]}>${food.price}</p>
      </div>
      <div className={styles["amount-container"]}>
        <p>
          <span className={styles.amount}>Amount</span>
          <span className={styles["amount-tips"]}>{cartCtx.getAmount(food)}</span>
        </p>
        <button
          className={`${styles["add-button"]} ${styles.button}`}
          onClick={onAddHandler}
        >
          +Add
        </button>
        <button
          className={`${styles["remove-button"]} ${styles.button}`}
          onClick={onRemoveHandler}
        >
          -Remove
        </button>
      </div>
    </li>
  );
};

export default Food;

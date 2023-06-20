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
      <h4>{food.name}</h4>
      <p>{food.price}</p>
      <span>&times;{food.amount}</span>
      <button onClick={onRemoveHandler}>&minus;</button>
      <button onClick={onAddHandler}>+</button>
    </li>
  );
};

export default FoodInCart;

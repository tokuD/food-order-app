/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useReducer } from "react";
import { CartContextType, FoodInCartType } from "../types/cart-types";
import { FoodType } from "../types/food-type";

const CartContext = React.createContext<CartContextType>({
  foodsInCart: [],
  addFood: (_) => {},
  removeFood: (_) => {},
  resetCart: () => {},
  getTotalAmount: () => 0,
  getTotaoPrice: () => "",
  getAmount: (_) => 0,
});

type Payload = {
  action: "ADD" | "REMOVE" | "RESET";
  food?: FoodType;
};

const foodsInCartReducer = (
  prev: FoodInCartType[],
  payload: Payload
): FoodInCartType[] => {
  if (payload.action === "RESET") {
    return [];
  }
  if (payload.food === undefined) {
    return prev;
  }
  const duplicateFood = prev.find((food) => food.id === payload.food?.id);
  switch (payload.action) {
    case "ADD":
      if (duplicateFood === undefined) {
        return [...prev, { ...payload.food, amount: 1 }];
      }
      return [
        ...prev.filter((food) => food.id !== duplicateFood.id),
        { ...duplicateFood, amount: duplicateFood.amount + 1 },
      ];
    case "REMOVE":
      if (duplicateFood === undefined) {
        return prev;
      }
      if (duplicateFood.amount === 1) {
        return [...prev.filter((food) => food.id !== duplicateFood.id)];
      }
      return [
        ...prev.filter((food) => food.id !== duplicateFood.id),
        { ...duplicateFood, amount: duplicateFood.amount - 1 },
      ];
    default:
      return prev;
  }
};

export const CartProvider = (props: { children: React.ReactNode }) => {
  const [foodsInCart, foodsInCartDispatcher] = useReducer(
    foodsInCartReducer,
    []
  );

  const cartCtx: CartContextType = {
    foodsInCart,
    addFood: (food) => {
      foodsInCartDispatcher({ action: "ADD", food });
    },
    removeFood: (food) => {
      foodsInCartDispatcher({ action: "REMOVE", food });
    },
    resetCart: () => {
      foodsInCartDispatcher({ action: "RESET" });
    },
    getTotalAmount: () => {
      return foodsInCart
        .map((food) => food.amount)
        .reduce((total, amount) => total + amount, 0);
    },
    getTotaoPrice: () => {
      return foodsInCart
        .map((food) => food.price * food.amount)
        .reduce((total, price) => total + price, 0)
        .toFixed(2);
    },
    getAmount: (food) => {
      const duplicateFood = foodsInCart.find((f) => f.id === food.id);
      return duplicateFood ? duplicateFood.amount : 0;
    },
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

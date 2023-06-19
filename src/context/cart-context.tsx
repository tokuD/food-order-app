import React from "react";
import { CartType } from "../types/cart-types";

const initCart: CartType = {
  foods: [],
  totalAmount: 0,
  totalPrice: 0,
};

const CartContext = React.createContext(initCart);

export const CartProvider = (props: { children: React.ReactNode }) => {
  return (
    <CartContext.Provider value={initCart}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

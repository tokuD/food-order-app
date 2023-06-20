import { useContext } from "react";
import CartContext from "../context/cart-context";
import FoodInCart from "./FoodInCart";

const CartModal = () => {
  const cartCtx = useContext(CartContext);

  return (
    <section>
      <ul>
        {cartCtx.foodsInCart.map((food) => (
          <FoodInCart food={food} />
        ))}
      </ul>
    </section>
  );
};
export default CartModal;

import { FoodInCartType } from "../types/cart-types";

type Props = {
  food: FoodInCartType;
};

const FoodInCart = (props: Props) => {
  const { food } = props;
  return (
    <li>
      <h4>{food.name}</h4>
      <p>{food.amount}</p>
    </li>
  );
};

export default FoodInCart;

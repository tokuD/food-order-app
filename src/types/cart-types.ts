import { FoodType } from "./food-type";

export interface FoodInCartType extends FoodType {
  amount: number;
}

export interface CartContextType {
  foodsInCart: FoodInCartType[];
  addFood: (food: FoodType) => void;
  removeFood: (food: FoodType) => void;
  resetCart: () => void;
}

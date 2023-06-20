import { FoodType } from "../types/food-type";
import Food from "./Food";
import styles from "./FoodList.module.css";

type Props = {
  foods: FoodType[];
};

const FoodList = (props: Props) => {
  const { foods } = props;
  return (
    <ul className={styles['food-list-container']}>
      {foods.map((food) => (
        <Food food={food} key={food.id} />
      ))}
    </ul>
  );
};

export default FoodList;

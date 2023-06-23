import { FoodType } from "../types/food-type";
import Food from "./Food";
import styles from "./FoodList.module.css";

type Props = {
  foods: FoodType[];
  isLoading: boolean;
  hasError: boolean;
};

const FoodList = (props: Props) => {
  const { foods, isLoading, hasError } = props;
  if (hasError) {
    return (
      <ul className={styles["food-list-container"]}>
        <p style={{ color: "red" }}>Something went wrong.</p>
      </ul>
    );
  }
  if (isLoading) {
    return (
      <ul className={styles["food-list-container"]}>
        <p>Loading...</p>
      </ul>
    );
  }
  return (
    <ul className={styles["food-list-container"]}>
      {foods.map((food) => (
        <Food food={food} key={food.id} />
      ))}
    </ul>
  );
};

export default FoodList;

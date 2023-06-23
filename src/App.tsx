import { Fragment, useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import Title from "./components/Title";
import FoodList from "./components/FoodList";
import { FoodType } from "./types/food-type";
import CartModal from "./components/CartModal";

const url = "https://react-http-36f4d-default-rtdb.firebaseio.com/foods.json";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchFoods = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    const response = await fetch(url);
    if (response.ok) {
      const data: FoodType[] = await response.json();
      setIsLoading(false);
      return data;
    } else {
      setHasError(true);
      return [];
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setFoods(await fetchFoods());
    };
    fetch();
  }, [fetchFoods]);

  const modalOpenHandler = () => {
    setModalIsOpen(true);
  };
  const modalCloseHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <Fragment>
      {modalIsOpen && <CartModal modalCloseHandler={modalCloseHandler} />}
      <Header modalOpenHandler={modalOpenHandler} />
      <main className={styles["main-container"]}>
        <img
          src="/public/meals.jpg"
          alt="foods"
          className={styles["hero-img"]}
        />
        <Title />
        <FoodList foods={foods} isLoading={isLoading} hasError={hasError} />
      </main>
    </Fragment>
  );
}

export default App;

import { Fragment, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import Title from "./components/Title";
import FoodList from "./components/FoodList";
import { FoodType } from "./types/food-type";
import CartModal from "./components/CartModal";

const foodList: FoodType[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
        <FoodList foods={foodList} />
      </main>
    </Fragment>
  );
}

export default App;

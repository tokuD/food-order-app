import styles from "./Title.module.css";

const Title = () => {
  return (
    <section className={styles['title-container']}>
      <h2 className={styles.title}>Delicious Food, Delivered To You</h2>
      <p className={styles.paragraph}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={styles.paragraph}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default Title;

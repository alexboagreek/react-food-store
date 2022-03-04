import styles from './PromoText.module.css';


const PromoText = () => {
  return (
    <section className = { styles['promo-text'] }>
      <h2>Online React Dukai Sushi Bar</h2>
      <p>
        Dukai Sushi is an online sushi restaurant where your favorite sushi and
        sashimi, rolls and other dishes of national Japanese cuisine is made by
        a team of professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most real components give
        good taste to dishes and give the pleasure of a meal.
      </p>
    </section>
  );
};

export default PromoText;

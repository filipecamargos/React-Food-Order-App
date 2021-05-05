import classes from './MealsSummary.module.css';

//This is the top summary used in the main home page
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Meals Ready For you!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ab a!
        Id, possimus voluptatum beatae fugit similique.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur
        accusamus.
      </p>
    </section>
  );
};

export default MealSummary;

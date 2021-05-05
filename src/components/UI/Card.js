import classes from "./Card.module.css";

//This is just a card wrapper for some style usage
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

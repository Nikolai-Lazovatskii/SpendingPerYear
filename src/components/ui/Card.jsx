/* eslint-disable react/prop-types */
import "./card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>
};

export default Card;

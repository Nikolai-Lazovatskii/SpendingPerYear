/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./../ui/Card";
import CostDate from "./CostDate";
import "./costItem.css";

const CostItem = ({ date, item, price }) => {
  const [description, change] = useState(item)
  const changeItem = () => {
    change('Money')
  }
  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">$ {price}</div>
      </div>
      <button onClick={changeItem}>Change info</button>
    </Card>
  );
};

export default CostItem;

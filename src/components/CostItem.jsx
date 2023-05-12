/* eslint-disable react/prop-types */
import Card from "./Card";
import CostDate from "./CostDate";
import "./costItem.css";

const CostItem = ({ date, item, price }) => {

  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{item}</h2>
        <div className="cost-item__price">$ {price}</div>
      </div>
    </Card>
  );
};

export default CostItem;

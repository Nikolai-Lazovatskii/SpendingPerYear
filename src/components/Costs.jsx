/* eslint-disable react/prop-types */
import "./costs.css";
import CostItem from "./CostItem";

const Costs = ({ cost }) => {
  return (
    <div className="costs">
      <CostItem date={cost[0].date} item={cost[0].item} price={cost[0].price} />
      <CostItem date={cost[1].date} item={cost[1].item} price={cost[1].price} />
      <CostItem date={cost[2].date} item={cost[2].item} price={cost[2].price} />
    </div>
  );
};

export default Costs;

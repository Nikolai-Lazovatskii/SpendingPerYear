/* eslint-disable react/prop-types */
import "./costList.css";
import CostItem from "./CostItem";

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return <h2 className="cost-list__fallback">There is nothing here ^^</h2>
  }

  return <ul className="cost-list">
    {costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        item={cost.name}
        price={cost.amount}
      />
    ))}
  </ul>;
};

export default CostList;

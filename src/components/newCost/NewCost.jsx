/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import CostForm from "./CostForm";
import "./newCost.css";

const NewCost = (props) => {
  // cancel
  const [formState, changeFormState] = useState(false);

  const costDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
  };

  const formCreator = () => {
    changeFormState((prevState) => !prevState)
  }

  return (
    <div className="new-cost">
      {formState ? <CostForm stateFunc={formCreator} onCostData={costDataHandler} /> : <button onClick={formCreator}>Add New Expense</button>}
    </div>
  );
};

export default NewCost;

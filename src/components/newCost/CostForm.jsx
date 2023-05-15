/* eslint-disable react/prop-types */
import { useState } from "react";
import "./costForm.css";

const CostForm = (props) => {

  // name
  const [inputName, changeName] = useState("");
  const nameChangeHandler = (event) => {
    changeName(event.target.value);
  };

  // amount
  const [inputAmount, changeAmount] = useState("");
  const amountChangeHandler = (event) => {
    changeAmount(event.target.value);
  };

  // date
  const [inputDate, changeDate] = useState("");
  const dateChangeHandler = (event) => {
    changeDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onCostData(costData);

    changeName('')
    changeAmount('')
    changeDate('')

    props.stateFunc()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="date"
            min="2022-02-24"
            step="2023-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add new</button>
          <button type="button" onClick={props.stateFunc}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

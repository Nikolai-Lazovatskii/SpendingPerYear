import { useState } from "react";
import "./costForm.css";

const CostForm = () => {
  // const [userInput, changeUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  // name
  const [inputName, changeName] = useState("");
  const nameChangeHandler = (event) => {
    changeName(event.target.value);
    // changeUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.targe.value,
    //   };
    // });
  };

  // amount
  const [inputAmount, changeAmount] = useState("");
  const amountChangeHandler = (event) => {
    changeAmount(event.target.value);
    // changeUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     amount: event.targe.value,
    //   };
    // });
  };

  // date
  const [inputDate, changeDate] = useState("");
  const dateChangeHandler = (event) => {
    changeDate(event.target.value);
    // changeUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     date: event.targe.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: inputDate,
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="date"
            min="2022-02-24"
            step="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add new</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

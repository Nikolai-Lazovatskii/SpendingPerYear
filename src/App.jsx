import { useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 4, 12),
    name: "Phone",
    amount: "299.99",
  },
  {
    id: 'c2',
    date: new Date(2020, 3, 1),
    name: "TV",
    amount: "459.99",
  },
  {
    id: 'c3',
    date: new Date(2021, 10, 25),
    name: "Jacket",
    amount: "56",
  },
];

function App() {
  const [costs, changeCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (inputCost) => {
    changeCosts( prevCost => {
      return [inputCost, ...prevCost]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;

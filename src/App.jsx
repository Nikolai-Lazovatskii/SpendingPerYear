import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";


function App() {
  const cost = [
    {
      date: new Date(2023, 4, 12),
      item: "Phone",
      price: "299.99",
    },
    {
      date: new Date(2023, 3, 1),
      item: "TV",
      price: "459.99",
    },
    {
      date: new Date(2022, 10, 25),
      item: "Jacket",
      price: "56",
    },
  ];
  return (
    <div>
      <NewCost />
      <Costs cost={cost}/>
    </div>
  );
}

export default App;

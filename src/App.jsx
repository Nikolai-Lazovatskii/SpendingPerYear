import CostItem from "./components/CostItem";

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
    <div className="App">
      <h1>My project</h1>
      <CostItem date={cost[0].date} item={cost[0].item} price={cost[0].price} />
      <CostItem date={cost[1].date} item={cost[1].item} price={cost[1].price} />
      <CostItem date={cost[2].date} item={cost[2].item} price={cost[2].price} />
    </div>
  );
}

export default App;

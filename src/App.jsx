import Costs from "./components/Costs";


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
      <h1>My project</h1>
      <Costs cost={cost}/>
    </div>
  );
}

export default App;

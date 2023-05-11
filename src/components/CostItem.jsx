import "./costItem.css";

const CostItem = ({ date, item, price }) => {

    const day = date.toLocaleString("en-EN", { day: "2-digit" })
    const month = date.toLocaleString("en-EN", { month: "long" })
    const year = date.getFullYear()

  return (
    <div className="cost-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="cost-item__description">
        <h2>{item}</h2>
        <div className="cost-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default CostItem;

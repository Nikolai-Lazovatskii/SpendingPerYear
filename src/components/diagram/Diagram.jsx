/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./diagram.css";
import DiagramBar from "./diagramBar";

const Diagram = (props) => {

    const datsSetValues = props.dataSets.map((set) => set.value)

    const maxMonthCosts = Math.max(...datsSetValues)

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        console.log(dataSet.label),
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./diagram.css";
import DiagramBar from "./diagramBar";

const Diagram = (props) => {

  return (
    <div className="diagram">
      {props.dataSet.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={null}
          lable={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;

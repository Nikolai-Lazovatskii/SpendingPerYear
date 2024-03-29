/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./costs.css";
import Card from "./../ui/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./costsDiagram";

const Costs = ({ costs }) => {
  const [selectedYear, changeSelectedYear] = useState("2023");
  const changeYearHandler = (inputYear) => {
    changeSelectedYear(inputYear);
  };

  const filtred = costs.filter(
    (cost) => +selectedYear === cost.date.getFullYear()
  );

  return (
    <div>
      <li>
        <Card className="costs">
          <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
          <CostsDiagram costs={filtred} />
          <CostList costs={filtred} />
        </Card>
      </li>
    </div>
  );
};

export default Costs;

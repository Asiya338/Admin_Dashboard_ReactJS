import React from "react";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  Legend,
  SeriesDirective,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
  stackedCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      id="charts"
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      legendSettings={{ background: "white" }}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      ></Inject>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;

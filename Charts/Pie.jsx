import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationTooltip,
  Inject,
  PieSeries,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
//pie that has inner radius is called doughnut

const Pie = ({ id, data, legendVisibility, height, fontSize }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      legendSettings={{ visible: legendVisibility, background: "white" }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : " #fff"}
    >
      <Inject
        services={[
          AccumulationLegend,
          AccumulationTooltip,
          AccumulationDataLabel,
          PieSeries,
        ]}
      />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          name="Sale"
          type="Pie"
          dataLabel={{
            visible: true,
            font: {
              fontWeight: "600",
              color: "#fff",
              size: { fontSize },
            },
            position: "Inside",
            name: "text",
          }}
          explode
          explodeOffset="10%"
          explodeIndex={2}
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="90%"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;

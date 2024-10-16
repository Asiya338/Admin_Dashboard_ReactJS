import React from "react";
import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
const SparkLine = ({ id, width, height, color, currentColor, type, data }) => {
  const { currentMode } = useStateContext();
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType="Numeric"
      fill={color}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
export default SparkLine;

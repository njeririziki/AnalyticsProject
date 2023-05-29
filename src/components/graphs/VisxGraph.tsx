import React from 'react';
import { LinePath } from '@visx/shape';

type DataPoint = {
  x: number;
  y: number;
};

type LineChartProps = {
  data: DataPoint[];
  width: number;
  height: number;
};

const LineChart: React.FC<LineChartProps> = ({ data, width, height }) => {
  return (
    <svg width={width} height={height}>
      <LinePath<DataPoint>
        data={data}
        x={(d) => d.x}
        y={(d) => d.y}
        stroke="#000"
        strokeWidth={1.5}
      />
    </svg>
  );
};

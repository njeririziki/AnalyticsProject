// import React from 'react';
// import { Group } from '@visx/group';
// //import { PieArcDatum, Pie } from '@visx/shape';
// import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
// import { scaleOrdinal } from '@visx/scale';

// type DonutChartProps = {
//   data: { label: string; value: number }[];
//   width: number;
//   height: number;
//   colors: string[];
// };

// const DonutChart: React.FC<DonutChartProps> = ({ data, width, height, colors }) => {
//   const radius = Math.min(width, height) / 2;
//   const colorScale = scaleOrdinal<string>({ domain: data.map((d) => d.label), range: colors });

//   return (
//     <svg width={width} height={height}>
//       <Group top={height / 2} left={width / 2}>
//         <Pie
//           data={data}
//           pieValue={(d) => d.value}
//           outerRadius={radius}
//           innerRadius={radius / 2}
//           cornerRadius={3}
//           padAngle={0.005}
//         >
//           {(pie) => (
//             pie.arcs.map((arc) => (
//               <g key={arc.data.label}>
//                 <path
//                   d={pie.path(arc) || ''}
//                   fill={colorScale(arc.data.label) || ''}
//                 />
//                 <text
//                   fill="white"
//                   x={arc.centroid[0]}
//                   y={arc.centroid[1]}
//                   dy=".33em"
//                   fontSize={12}
//                   textAnchor="middle"
//                   pointerEvents="none"
//                 >
//                   {arc.data.value}
//                 </text>
//               </g>
//             ))
//           )}
//         </Pie>
//       </Group>
//     </svg>
//   );
// };

// export default DonutChart;

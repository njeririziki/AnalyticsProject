import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear }  from '@visx/scale'
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { ParentSize } from '@visx/responsive';
//const Scale=  import ('@visx/scale') ;

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// accessors
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};
//const { scaleBand, scaleLinear } =Scale
export default function Bars({ width, height, events = false }: BarsProps) {
  // bounds
  
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax],
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax],
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
       
      {/* <GradientTealBlue id="teal" /> */}
      <rect width={width} height={height} fill="url(#blue)" rx={14} />
      <Group top={verticalMargin / 2}>
        
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="#2774E9"
              onClick={() => {
                if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
              }}
            />
          );
        })}
      </Group>
    </svg>
  );
}

export let ChartToRender = (
  <ParentSize>
    {(parent) => (
      <Bars
        width={parent.width}
        height={parent.height}
       // parentTop={parent.top}
       // parentLeft={parent.left}
        // this is the referrer to the wrapper component
       // parentRef={parent.ref}
        // this function can be called inside MyVisxChart to cause a resize of the wrapper component
      //  resizeParent={parent.resize}
      />
    )}
  </ParentSize>
);
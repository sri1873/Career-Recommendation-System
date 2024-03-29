import React, { useEffect } from "react";
import { ResponsiveLine } from '@nivo/line'
const data1 = [
  {
    "id": "Progress",
    "data": [
      {
        "x": "start",
        "y": 0
      }
    ]
  }
  , {
    "id": "target",
    "data": [
      {
        "x": "start",
        "y": 0
      },

    ]
  }
]
interface lineProps {
  data: { target: number, actual: number, label: string }[] | undefined
}
const LineGraph: React.FC<lineProps> = ({ data }) => {
  useEffect(() => {
    (data)?.forEach((perf) => {
      data1[0]['data'].push({ 'x': perf.label, 'y': perf.actual });
      data1[1]['data'].push({ 'x': perf.label, 'y': perf.target });
    });
  }, [data])

  return <ResponsiveLine data={data1}
    margin={{
      top: 20,
      right: 110,
      bottom: 40,
      left: 60
    }} xScale={{
      type: 'point'
    }} yScale={{
      type: 'linear',
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false
    }} curve="cardinal" axisTop={null} axisRight={null} axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }} axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,

    }}
    theme={{
      "axis": {
        "domain": {
          "line": {
            "stroke": "#777777",
            "strokeWidth": 1
          }
        },
        "legend": {
          "text": {
            "fontSize": 12,
            "fill": "#ffffff",
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        },
        "ticks": {
          "line": {
            "stroke": "#777777",
            "strokeWidth": 1
          },
          "text": {
            "fontSize": 11,
            "fill": "#ffffff",
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        }
      },
      "legends": {
        "text": { "fill": "white" }
      },
      "tooltip": {
        "container": {
          "background": "#000000",
          "fontSize": 12
        }
      },
    }}
    enableArea={true}
    colors={['#fdf0d5', '#48cae4']}
    pointSize={10} pointColor={{
      theme: 'background'
    }} pointBorderWidth={2} pointBorderColor={{
      from: 'serieColor'
    }} pointLabelYOffset={-12} useMesh={true} enableGridX={false} enableGridY={false} legends={[{
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [{
        on: 'hover',
        style: {
          itemBackground: 'rgba(0, 0, 0, .03)',
          itemOpacity: 1
        }
      }]
    }]} motionConfig="wobbly" />;
}

export default LineGraph;
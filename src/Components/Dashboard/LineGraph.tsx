import React from "react";
import { ResponsiveLine } from '@nivo/line'
const data = [
  {
    "id": "japan",
    "color": "hsl(343, 75%, 20%)",
    "data": [
      {
        "x": "plane",
        "y": 281
      },
      {
        "x": "helicopter",
        "y": 320
      },
      {
        "x": "boat",
        "y": 389
      },
      {
        "x": "train",
        "y": 450
      },
      {
        "x": "subway",
        "y": 537
      },
      {
        "x": "bus",
        "y": 600
      },
      {
        "x": "car",
        "y": 685
      },
      {
        "x": "moto",
        "y": 759
      },
      {
        "x": "bicycle",
        "y": 800
      },
    ]
  }, {
    "id": "japn",
    "color": "hsl(349, 100%, 65%)",
    "data": [
      {
        "x": "plane",
        "y": 240
      },
      {
        "x": "helicopter",
        "y": 350
      },
      {
        "x": "boat",
        "y": 390
      },
      {
        "x": "train",
        "y": 420
      },
      {
        "x": "subway",
        "y": 515
      },
      {
        "x": "bus",
        "y": 590
      },
      {
        "x": "car",
        "y": 600
      },
      {
        "x": "moto",
        "y": 730
      },
      {
        "x": "bicycle",
        "y": 750
      },

    ]
  }]

export default function LineGraph() {
  return <ResponsiveLine data={data} margin={{
    top: 50,
    right: 110,
    bottom: 25,
    left: 60
  }} xScale={{
    type: 'point'
  }} yScale={{
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: false,
    reverse: false
  }} curve="cardinal" axisTop={null} axisRight={null} axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'transportation',
    legendOffset: -40,
    legendPosition: 'middle'
  }} axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'count',
    legendOffset: -40,
    legendPosition: 'middle'
  }} enableArea={true} pointSize={10} pointColor={{
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
  
 import React from "react";
import { ResponsiveRadialBar } from '@nivo/radial-bar'

const data = [
    {
        "id": "Supermarket",
        "data": [
            {
                "x": "Vegetables",
                "y": 298
            },
            {
                "x": "Fruits",
                "y": 290
            },
            {
                "x": "Meat",
                "y": 31
            }
        ]
    },
    {
        "id": "Combini",
        "data": [
            {
                "x": "Vegetables",
                "y": 119
            },
            {
                "x": "Fruits",
                "y": 66
            },
            {
                "x": "Meat",
                "y": 248
            }
        ]
    },
    {
        "id": "Online",
        "data": [
            {
                "x": "Vegetables",
                "y": 39
            },
            {
                "x": "Fruits",
                "y": 57
            },
            {
                "x": "Meat",
                "y": 162
            }
        ]
    },
    {
        "id": "Marché",
        "data": [
            {
                "x": "Vegetables",
                "y": 274
            },
            {
                "x": "Fruits",
                "y": 10
            },
            {
                "x": "Meat",
                "y": 222
            }
        ]
    },
    {
        "id": "w",
        "data": [
            {
                "x": "Vegetables",
                "y": 274
            },
            {
                "x": "Fruits",
                "y": 10
            },
            {
                "x": "Meat",
                "y": 222
            }
        ]
    }
    ,
    {
        "id": "s",
        "data": [
            {
                "x": "Vegetables",
                "y": 274
            },
            {
                "x": "Fruits",
                "y": 10
            },
            {
                "x": "Meat",
                "y": 222
            }
        ]
    }
]
export default function RankChart() {
    return (
    <ResponsiveRadialBar
        data={data}
        padding={0.4}
        cornerRadius={2}            innerRadius={0.35}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: 'pink_yellowGreen' }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        />
    );
 }
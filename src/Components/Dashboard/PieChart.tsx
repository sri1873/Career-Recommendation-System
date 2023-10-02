import { ResponsivePie } from '@nivo/pie';
import React from "react"

const data = [
    {
        "id": "c",
        "label": "c",
        "value": 126,
        "color": "hsl(299, 70%, 50%)"
    },
    {
        "id": "lisp",
        "label": "lisp",
        "value": 579,
        "color": "hsl(325, 70%, 50%)"
    },
    {
        "id": "ruby",
        "label": "ruby",
        "value": 174,
        "color": "hsl(141, 70%, 50%)"
    },
    {
        "id": "sass",
        "label": "sass",
        "value": 81,
        "color": "hsl(1, 70%, 50%)"
    },
    {
        "id": "php",
        "label": "php",
        "value": 335,
        "color": "hsl(27, 70%, 50%)"
    }
]

export default function PieChart() {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.35}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'oranges' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextOffset={9}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsOffset={1}
            arcLinkLabelsStraightLength={26}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            motionConfig="wobbly"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 0,
                    symbolSize: 20,
                    itemDirection: 'left-to-right'
                }
            ]}
        />
    );
}


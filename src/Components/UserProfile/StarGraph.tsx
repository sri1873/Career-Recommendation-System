import { ResponsiveRadar } from '@nivo/radar'
const data = [
    {
        "skill": "Communication",
        "score": 9
    },
    {
        "skill": "Speaking",
        "score": 7
    },
    {
        "skill": "Presenation",
        "score": 8
    },
    {
        "skill": "Leadership",
        "score": 5
    },
    {
        "skill": "Creative Thinking",
        "score": 4
    },
    {
        "skill": "Teamwork",
        "score": 9
    }
]

const StarGraph = () => {
    return (
        <ResponsiveRadar
            data={data}
            keys={['score']}
            indexBy="skill"
            maxValue={10}
            valueFormat=" >-.2f"
            margin={{ top: 35, right: 5, bottom: 35, left: 5 }}
            borderColor={{ from: 'color' }}
            gridLabelOffset={25}
            gridShape="linear"
            dotSize={8}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={1.5}
            colors={{ scheme: 'blues' }}
            fillOpacity={0.5}
            blendMode="lighten"
            motionConfig="wobbly"
            theme={{
                "axis": {

                    "ticks": {
                        "text": {
                            "fontSize": 11,
                            "fill": "#ffffff",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "tooltip": {
                    "container": {
                        "background": "#000000",
                        "fontSize": 12
                    }
                },
            }}
        />
    );
}

export default StarGraph;
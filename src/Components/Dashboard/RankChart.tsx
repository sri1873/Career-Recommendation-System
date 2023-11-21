import { ResponsiveBar } from '@nivo/bar'
import { RankType } from '../../types';
import { BasicTooltip } from '@nivo/tooltip';


const data1: any = []

interface rankprops { data: RankType[] | null }
const RankChart: React.FC<rankprops> = ({ data }) => {
    data?.forEach((el) => {
        var temp_d = {
            "rank": el.rank,
            "performance": el.actual_marks,
            "username": el.user_name
        }
        data1.push(temp_d);
    })

    return (
        <ResponsiveBar
            tooltip={point => {
                return <BasicTooltip id={point.data.performance} value={point.data.username} enableChip />;
            }}
            data={data1}
            keys={['performance']}
            indexBy="rank"
            borderRadius={3}
            margin={{ top: 15, right: 50, bottom: 80, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            colors={['#48cae4']}
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
                "tooltip": {
                    "container": {
                        "background": "#000000",
                        "fontSize": 12
                    }
                },
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Rank',
                legendPosition: 'middle',
                legendOffset: 32,

            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Perfromance',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
        />
    )
}

export default RankChart;
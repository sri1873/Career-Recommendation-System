import { ResponsivePie } from '@nivo/pie';
import React from "react"

interface SkillScores {
    data: { [key: string]: number }
}
// const data1 = {
//     "Maths": 50,
//     "C Programing": 75,
//     "Python": 20,
//     "HTML/CSS": 42.49999999999999,
//     "Cloud Computing": 36,
//     "Database Management": 10,
//     "Data Structures": 50,
//     "JavaScript": 42.49999999999999,
//     "React": 60,
//     "Node.js": 80,
//     "Git": 90,
//     "UI/UX Design": 69,
//     "Software Architecture": 34,
//     "Software Testing": 12,
//     "Software Troubleshooting and Debugging": 22,
//     "Problem Solving": 64,
//     "Projects": 79,
//     "Internships": 40
// }
const PieChart: React.FC<SkillScores> = ({data}) => {

    const pieData = Object.entries(data).map(([id, value]) => ({
        id: id.toLowerCase().replace(/\s+/g, '_'), // Assuming 'id' is a simplified version of the key
        label: id.toLowerCase(),
        value: parseFloat(value.toFixed(2)), // Rounding the value to 2 decimal places
    }));

    console.log(pieData)

    return (
        <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.35}
            padAngle={2}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'purpleRed_green' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker', 0.2
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
           
            motionConfig="wobbly"
        />
    );
}
export default PieChart;

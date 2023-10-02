import LineGraph from './LineGraph';
import React, { useState } from "react";
import PieChart from './PieChart';
import RankChart from './RankChart';



const DashboardCharts: React.FC = () => {
    return (
        <div className='flex-row justify-between max-w-[70vw]'>
            <div className=" h-[50vh] ">
                <LineGraph />
            </div>
            <div className="flex justify-between">
                <div className="w-[50vw] h-[50vh] ">
                    <PieChart />
                </div>
                <div className="w-[50vw] h-[50vh]">
                    <RankChart />
                </div>
            </div>
        </div>
    )
}

export default DashboardCharts
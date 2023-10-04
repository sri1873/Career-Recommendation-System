import LineGraph from './LineGraph';
import React, { useState } from "react";
import PieChart from './PieChart';
import RankChart from './RankChart';



const DashboardCharts: React.FC = () => {
    return (
        <div className='flex-row ml-[5vw] bg-slate-100 justify-between w-[70vw]'>
            <div className=" h-[50vh] p-4 ">
                <div className="font-semibold pl-4">Overall Performance</div>
                <LineGraph />
            </div>
            <div className="flex justify-between pt-1">
                <div className="w-[50vw] h-[45vh] ">
                <div className="font-semibold pl-4 pt-4">Subject-wise Analysis</div>
                    <PieChart />
                </div>
                <div className="w-[50vw] h-[50vh]">
                    {/* <RankChart /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardCharts
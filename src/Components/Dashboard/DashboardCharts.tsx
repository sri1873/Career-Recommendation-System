import LineGraph from './LineGraph';
import React, { useState } from "react";
import PieChart from './PieChart';
import RankChart from './RankChart';
import '../styles/dashboard.css'



const DashboardCharts: React.FC = () => {
    return (
        <div className='dashboard-container'>
            <div className="linegraph-container">
                <div className="lg-title">Overall Performance</div>
                <LineGraph />
            </div>
            <div className="secondary-container">
                <div className="piechart-container">
                    <div className="pc-title">Subject-wise Analysis</div>
                    <PieChart />
                </div>
                <div className="piechart-container">
                    {/* <RankChart /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardCharts
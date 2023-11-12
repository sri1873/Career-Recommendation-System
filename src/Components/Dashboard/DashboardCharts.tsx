import LineGraph from './LineGraph';
import React, { useEffect, useState } from "react";
import PieChart from './PieChart';
import RankChart from './RankChart';
import '../styles/dashboard.css'
import base from '../../apis/base';
import { useSelector } from 'react-redux';
import { AuthState, User } from '../../types';



const DashboardCharts: React.FC = () => {
    const [skillGap, setSkillGap] = useState<{ [key:string]: number }>({})
    const user: User = useSelector((state: AuthState) => state.user);
    useEffect(() => {
        base.post(`user/skill-Gap-Analysis?studentId=${user.userId}`).then(res => { setSkillGap(res.data); })
    }, [])
    


    return (
        <div className='dashboard-container'>
            <div className="linegraph-container">
                <div className="lg-title">Overall Performance</div>
                <LineGraph />
            </div>
            <div className="secondary-container">
                <div className="piechart-container">
                    <div className="pc-title">Subject-wise Analysis</div>
                    <PieChart data={skillGap} />
                </div>
                <div className="piechart-container">
                    {/* <RankChart /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardCharts
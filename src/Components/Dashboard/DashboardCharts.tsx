import LineGraph from './LineGraph';
import React, { useEffect, useState } from "react";
import PieChart from './PieChart';
import '../styles/dashboard.css'
import base from '../../apis/base';
import { useSelector } from 'react-redux';
import { AuthState, OperformanceType, User, RankType } from '../../types';
import RankChart from './RankChart';




const DashboardCharts: React.FC = () => {
    const [skillGap, setSkillGap] = useState<{ [key: string]: number }>({})
    const [oPerformance, setOPerformance] = useState<OperformanceType | null>(null)
    const [ranks, setRanks] = useState<RankType[] | null>(null)
    const user: User = useSelector((state: AuthState) => state.user);
    useEffect(() => {
        base.post(`analysis/skill-Gap-Analysis?studentId=${user.userId}`).then(res => { setSkillGap(res.data); })
        base.get(`analysis/getoverallperformance?studentId=${user.userId}`).then(res => { setOPerformance(res.data); })
        base.get(`analysis/top_3rank?studentId=${user.userId}`).then(res => { setRanks(res.data); })
    }, [user.userId])



    return (
        <div className='dashboard-container'>
            <div className="linegraph-container">
                <div className="lg-title">Overall Performance</div>
                <LineGraph data={oPerformance?.performance} />
            </div>
            <div className="secondary-container">
                <div className="piechart-container">
                    <div className="pc-title">Subject-wise Analysis</div>
                    <PieChart data={skillGap} />
                </div>
                <div className="piechart-container">
                    <RankChart data={ranks} />
                </div>
            </div>
        </div>
    )
}

export default DashboardCharts
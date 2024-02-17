import React, { useEffect, useState } from 'react';
import PieChart from '../Dashboard/PieChart';
import { AuthState, User } from '../../types';
import { useSelector } from 'react-redux';
import base from '../../apis/base';
import '../styles/progress.css'


const Progress = () => {
    const [skillGap, setSkillGap] = useState<{ [key: string]: number }>({})
    const user: User = useSelector((state: AuthState) => state.user);
    useEffect(() => {
        base.post(`analysis/skill-Gap-Analysis?studentId=${user.userId}`).then(res => { setSkillGap(res.data); })
    }, [user.userId])
    const handleSolve = (skill: string) => {
        window.location.href=`/challenge?s=${skill}`
    }
    return (
        <div className='progress-container'>
            <div className="pie-container">
                <PieChart data={skillGap} />
                <div className='c-path-progress' >
                    <div>
                        <i className="fa-solid fa-road"></i>
                        <span className="sub">Career Path</span>
                        <a href="/careerfitting">
                            <div className="sub">{user.careerPath}</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-container">
                {
                    Object.keys(skillGap).map(skill => (
                        <div className="card text-white bg-dark progress-card">
                            <div className="card-body progress-body">
                                <h5 className="card-title">{skill}</h5>
                                <button className="btn btn-outline-light" onClick={e=>handleSolve(skill)}>Solve Challenge</button>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>)
}
export default Progress;
import React from 'react';
import { useSelector } from "react-redux";
import { AuthState, User } from "../types";
import DashboardCharts from './Dashboard/DashboardCharts';
import Recommendation from './Recommendation';
import './styles/home.css';
import IndustryMain from './Industry/IndustryMain';

const Home: React.FC = () => {
    const goToCareerPath = () => {
        alert("Please Select career path first");
        window.location.href = '/careerfitting'
    }
    const user: User = useSelector((state: AuthState) => state.user);
    if ('INDC' === user.roles) {
        return (
            <IndustryMain/>
        )
    }
    else {
        return (
            <>
                {user.careerPath ?
                    <div className='home'>
                        <DashboardCharts />
                        <div className="rec-container">
                            <Recommendation />
                            <div className='c-path-home' >
                                <div>
                                    <i className="fa-solid fa-road"></i>
                                    <span className="sub">Career Path</span>
                                    <a href="/careerfitting">
                                        <div className="sub">{user.careerPath}</div>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                    :
                    goToCareerPath()
                }
            </>
        );
    }

}
export default Home
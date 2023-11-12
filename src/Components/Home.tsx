import React from 'react';
import { useSelector } from "react-redux";
import { AuthState, User } from "../types";
import DashboardCharts from './Dashboard/DashboardCharts';
import Recommendation from './Recommendation';
import './styles/home.css';

const Home: React.FC = () => {
    const goToCareerPath = () => {
        alert("Please Select career path first");
        window.location.href = '/careerfitting'
    }
    const user: User = useSelector((state: AuthState) => state.user);
    return (
        <>
            {user.careerPath ?
                <div className='home'>
                    <DashboardCharts />
                    <Recommendation />
                </div>
                :
                goToCareerPath()
                }
        </>
    );
}
export default Home
import React from 'react';
import { useSelector } from "react-redux";
import { AuthState, User } from "../types";
import DashboardCharts from './Dashboard/DashboardCharts';
import Recommendation from './Recommendation';
import './styles/home.css';

const Home: React.FC = () => {

    const user: User = useSelector((state: AuthState) => state.user);
    return (
        <>
            {user.careerPath ?
                <div className='home'>
                    <DashboardCharts />
                    <Recommendation />
                </div>
                : window.location.href = '/careerfitting'}
        </>
    );
}
export default Home
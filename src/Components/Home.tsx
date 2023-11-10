import React from 'react'
import DashboardCharts from './Dashboard/DashboardCharts';
import Recommendation from './Recommendation';
import { useSelector } from "react-redux";
import { AuthState, User } from "../types";
import CareerFitting from './CareerFitting/CareerFitting';
import './styles/home.css'

const Home: React.FC = () => {
    const user: User = useSelector((state: AuthState) => state.user);
    return (
        <div className='home'>
            <DashboardCharts />
            <Recommendation />
        </div>
    );
}
export default Home
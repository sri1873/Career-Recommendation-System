import React from 'react'
import DashboardCharts from './Dashboard/DashboardCharts';
import Recommendation from './Recommendation';


const Home: React.FC = () => {
    return (
        <div className='flex w-screen h-[90vh] '>
            <DashboardCharts />
            <Recommendation />
        </div>
    );
}
export default Home
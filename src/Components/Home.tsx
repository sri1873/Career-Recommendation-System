import React from 'react'
import DashboardCharts from './Dashboard/DashboardCharts';


const Home: React.FC = () => {
    return (
        <div className='flex w-screen border-2 border-red-500 h-[90vh] '>

            <div className="sidebar border-2 border-red-500 p-7">
            </div>
            <DashboardCharts />
            <div className="recommendation border-2 border-red-500 p-7 w-[30vw]">
                Recommendation
            </div>
        </div>
    );
}
export default Home
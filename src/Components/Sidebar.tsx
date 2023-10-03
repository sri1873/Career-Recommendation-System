import React from "react";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    
    return (
        isOpen ? <div className={`sidebar w-[20vw] p-5 pr-0 h-[90vh] fixed bg-slate-100 bg-sidebar-bg z-10`}>
            <ul className=" cursor-pointer">
                <li className="p-4 hover:bg-slate-400/50">
                    <i className="fa-solid fa-compass mr-4 text-lg"></i>
                    Dashboard
                </li>
                <li className="p-4  hover:bg-slate-400">
                    <i className="fa-solid fa-users mr-4 text-lg"></i>
                    Student Profile
                </li>
                <li className="p-4  hover:bg-slate-400">
                    <i className="fa-solid fa-graduation-cap mr-4 text-lg"></i>
                    Career path
                </li>
                <li className="p-4  hover:bg-slate-400 pr-0">
                    <i className="fa-solid fa-handshake mr-4 text-lg"></i>
                    Recommendations
                </li>
                <li className="p-4  hover:bg-slate-400">
                    <i className="fa-solid fa-chart-line mr-4 text-lg"></i>
                    Progress Tracker
                </li>
                <li className="p-4  hover:bg-slate-400 pr-0">
                    <i className="fa-solid fa-circle-nodes mr-4 text-lg"></i>
                    Connect
                </li>
            </ul>
        </div>
            : <div className={`sidebar w-[5vw] h-[90vh] fixed bg-slate-100 bg-sidebar-bg z-10 `}>
            <ul className="">
                <li className="p-4  hover:bg-slate-400  text-center">
                    <i className="fa-solid fa-compass text-lg"></i>
                </li>
                <li className="p-4  hover:bg-slate-400 text-center">
                    <i className="fa-solid fa-users text-lg"></i>
                </li>
                <li className="p-4  hover:bg-slate-400 text-center">
                    <i className="fa-solid fa-graduation-cap text-lg"></i>
                </li>
                <li className="p-4  hover:bg-slate-400 text-center">
                    <i className="fa-solid fa-handshake text-lg"></i>
                </li>
                <li className="p-4  hover:bg-slate-400 text-center">
                    <i className="fa-solid fa-chart-line text-lg"></i>
                </li>
                <li className="p-4  hover:bg-slate-400 text-center">
                    <i className="fa-solid fa-circle-nodes text-lg"></i>
                </li>
            </ul>
        </div>
        
    );
}

export default Sidebar;
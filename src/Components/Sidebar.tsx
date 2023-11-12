import React from "react";
import './styles/sidebar.css'

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {

    return (
        <div className={isOpen ? `sidebar-active` : `sidebar`}>
            <ul>
                <a href="/">
                    <i className="fa-solid fa-compass mr-4 text-lg"></i>
                    {isOpen ? "Dashboard" : null}
                </a>
                <a href="/profile">
                    <i className="fa-solid fa-users mr-4 text-lg"></i>
                    {isOpen ? "Student Profile" : null}
                </a>
                <a href="/careerfitting">
                    <i className="fa-solid fa-graduation-cap mr-4 text-lg"></i>
                    {isOpen ? "Career path" : null}
                </a>
                <a href="/">
                    <i className="fa-solid fa-handshake mr-4 text-lg"></i>
                    {isOpen ? "Recommendations" : null}
                </a>
                <a href="/">
                    <i className="fa-solid fa-chart-line mr-4 text-lg"></i>
                    {isOpen ? "Progress Tracker" : null}
                </a>
                <a href="/">
                    <i className="fa-solid fa-circle-nodes mr-4 text-lg"></i>
                    {isOpen ? "Connect" : null}
                </a>
            </ul>
        </div>


    );
}

export default Sidebar;
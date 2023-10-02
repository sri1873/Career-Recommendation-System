import React from "react";



const Navbar: React.FC = () => {
    return (
        <div className="navbar h-[10vh] p-4 bg-nav-bg  bg-no-repeat ">
            <ul className="flex justify-between">
                <li><i className="fa-solid fa-bars"></i></li>
                <li><span className="font-semibold px-3">CRS</span></li>
                <li>
                    <div className="profile flex items-center">
                        <div className="username">Sri Kumar</div>
                        <i className="fa-solid fa-user-graduate px-2 border-r-2 border-slate-600"></i>
                        <i className="fa-regular fa-moon px-2"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar
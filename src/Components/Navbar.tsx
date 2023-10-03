import React,{useState} from "react";
import Sidebar from "./Sidebar";


const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSideBar: React.MouseEventHandler<HTMLElement> = (e) => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="navbar sticky top-0 h-[10vh] p-4 bg-nav-bg  bg-no-repeat ">
            <ul className="flex justify-between">
                    <li onClick={e => toggleSideBar(e)}>
                        {isOpen ? <i className="fa-solid fa-bars-staggered cursor-pointer pl-3"></i>:
                        <i className="fa-solid fa-bars cursor-pointer pl-3" > </i>}
                    </li>
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
            <Sidebar isOpen={ isOpen} />
        </>
    );
}

export default Navbar
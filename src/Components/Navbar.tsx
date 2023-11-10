import React,{useState} from "react";
import Sidebar from "./Sidebar";
import './styles/navbar.css'


const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSideBar: React.MouseEventHandler<HTMLElement> = (e) => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="navbar">
            <ul>
                    <li onClick={e => toggleSideBar(e)}>
                        {isOpen ? <i className="fa-solid fa-bars-staggered burger"></i>:
                        <i className="fa-solid fa-bars burger" > </i>}
                    </li>
                <li><span className="nav-brand">CRS</span></li>
                {/* <li>
                    <div className="profile">
                        <div className="username">Sri Kumar</div>
                        <i className="fa-solid fa-user-graduate px-2 border-r-2 border-slate-600"></i>
                        <i className="fa-regular fa-moon px-2"></i>
                    </div>
                </li> */}
            </ul>
        </div>
            <Sidebar isOpen={ isOpen} />
        </>
    );
}

export default Navbar
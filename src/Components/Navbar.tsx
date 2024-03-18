import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Dispatch } from '@reduxjs/toolkit';
import './styles/navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { removeUser, toggleActive } from "../store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthState, User } from "../types";


const Navbar: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const user: User = useSelector((state: AuthState) => state.user);

    const toggleSideBar: React.MouseEventHandler<HTMLElement> = (e) => {
        setIsOpen(!isOpen);
    }
    const logoutHandler = () => {
        dispatch(toggleActive());
        dispatch(removeUser())
        navigate("/", { replace: true });
    }

    return (
        <>
            <div className="navbar">
                <ul>
                    <li onClick={e => toggleSideBar(e)}>
                        {isOpen ? <i className="fa-solid fa-bars-staggered burger"></i> :
                            <i className="fa-solid fa-bars burger" > </i>}
                    </li>
                    <li><span className="nav-brand">Skill Edu</span></li>
                    <li className="logout" onClick={e => logoutHandler()}>Logout</li>
                    {/* <li>
                    <div className="profile">
                        <div className="username">Sri Kumar</div>
                        <i className="fa-solid fa-user-graduate px-2 border-r-2 border-slate-600"></i>
                        <i className="fa-regular fa-moon px-2"></i>
                    </div>
                </li> */}
                </ul>
            </div>
            {'STUD' === user.roles ?
                <Sidebar isOpen={isOpen} /> : <></>
            }
        </>
    );
}

export default Navbar
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom/dist";
import base from "../apis/base";
import Decrypt from "../helpers/Decrypt";
import { addUser, toggleActive, setErrorMsg } from "../store";
import { Dispatch } from '@reduxjs/toolkit';
import { User } from '../types';
import './styles/login.css'

interface LoginDetails {
    email_id: string | null,
    password: string | null,
}

const Login = () => {
    const dispatch: Dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();


    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        email_id: null,
        password: null,
    });


    const from = location.state?.from?.pathname || "/";

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        console.log("yooooooooooooo")
        e.preventDefault();
        sessionStorage.clear();
        base({
            method: "POST",
            url: `user/login`,
            data: loginDetails,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then((res) => {
                const user: User = Decrypt(res.data.access_token);
                dispatch(toggleActive());
                dispatch(addUser(user));
                navigate(from, { replace: true });
            })
            .catch((err) => {

                dispatch(setErrorMsg("Invalid Credentials!"));
            });
    };



    return (


        <form className="login" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-container">
                <div>
                    <h2 className="logo-text">
                    <img
                        className="logo"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                        Sign in to your account
                    </h2>
                </div>
                <div className="form-body">
                    <div>
                        <label htmlFor="email" className="email-label">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={(e) =>
                                    setLoginDetails((prevState) => ({
                                        ...prevState,
                                        email_id: e.target.value,
                                    }))
                                }
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>
                            {/* <div>
                                <a href="#">
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={(e) =>
                                    setLoginDetails((prevState) => ({
                                        ...prevState,
                                        password: e.target.value,
                                    }))
                                }
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 "
                        >
                            Sign in
                        </button>
                    </div>



                </div>
            </div>
        </form>

    );
};
export default Login;


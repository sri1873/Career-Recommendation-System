import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom/dist";
import base from "../apis/base";
import Decrypt from "../helpers/Decrypt";
import { addUser, toggleActive, setErrorMsg } from "../store";
import { Dispatch } from '@reduxjs/toolkit';
import { User } from '../types';

interface LoginDetails {
    email: string | null,
    password: string | null,
}

const Login = () => {
    const dispatch: Dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();

    const [ConfirmButton, setConfirmButton] = useState<string>("")
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        email: null,
        password: null,
    });


    const from = location.state?.from?.pathname || "/";

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setConfirmButton("disable")
        sessionStorage.clear();
        base({
            method: "POST",
            url: `api/v1/auth/login`,
            data: loginDetails,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then((res) => {
                const user: User = Decrypt(res.data.data.token);
                setConfirmButton("");
                dispatch(toggleActive());
                dispatch(addUser(user));
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setConfirmButton("");
                dispatch(setErrorMsg("Invalid Credentials!"));
            });
    };


        
        return (
            <div className="login ">
            
                <form className="flex" onSubmit={(e) => handleSubmit(e)}>
                    <img
                        className="mx-auto sm:block w-auto sm:w-[50%] h-[100vh] hidden"
                        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt="Your Company"
                    />
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:bg-none bg-login-img bg-cover bg-no-repeat bg-center">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                                                email: e.target.value,
                                            }))
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </form>
        </div>
    );
};
export default Login;


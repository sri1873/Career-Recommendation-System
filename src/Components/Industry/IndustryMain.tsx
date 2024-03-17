import React, { useEffect, useState } from "react";
import base from "../../apis/base";
import '../styles/industry.css'
import { User } from "../../types";


const IndustryMain: React.FC = () => {

    const [users, setUsers] = useState<User[]>([{
        "user_name": "Bharath Reddy",
        "token": "w",
        "userId": "20WU0101010",
        "careerPath": null,
        "roles": "Web Dev",
        "semester": "1",
        "year": "4",
        "linkedin": null,
        "profile_img": null,
        "city": null,
        "country": null,
        "date_of_birth": null,
        "first_name": null,
        "last_name": null,
        "state": null
    }, {
        "user_name": "Bharath Reddy",
        "token": "w",
        "userId": "20WU0101010",
        "careerPath": null,
        "roles": "Web Dev",
        "semester": "1",
        "year": "4",
        "linkedin": null,
        "profile_img": null,
        "city": null,
        "country": null,
        "date_of_birth": null,
        "first_name": null,
        "last_name": null,
        "state": null
    }, {
        "user_name": "Bharath Reddy",
        "token": "w",
        "userId": "20WU0101010",
        "careerPath": null,
        "roles": "Web Dev",
        "semester": "1",
        "year": "4",
        "linkedin": null,
        "profile_img": null,
        "city": null,
        "country": null,
        "date_of_birth": null,
        "first_name": null,
        "last_name": null,
        "state": null
    }, {
        "user_name": "Bharath Reddy",
        "token": "w",
        "userId": "20WU0101010",
        "careerPath": null,
        "roles": "Web Dev",
        "semester": "1",
        "year": "4",
        "linkedin": null,
        "profile_img": null,
        "city": null,
        "country": null,
        "date_of_birth": null,
        "first_name": null,
        "last_name": null,
        "state": null
    }, {
        "user_name": "Bharath Reddy",
        "token": "w",
        "userId": "20WU0101010",
        "careerPath": null,
        "roles": "Web Dev",
        "semester": "1",
        "year": "4",
        "linkedin": null,
        "profile_img": null,
        "city": null,
        "country": null,
        "date_of_birth": null,
        "first_name": null,
        "last_name": null,
        "state": null
    },])

    // const [jobs, setJobs] = useState([])

    useEffect(() => {
        base.get(`user/getuser?studentId=20WU0101010`).then(
            res => {
                console.log(res.data)
                setUsers([res.data])
            }
        )
    }, [])
    return (
        <div className="main-container" >
            <div className="sub-container">

                <div className="jobs-container">

                    <div className="card card-j" >
                        <div className="card-body">
                            <h5 className="card-title">Sod</h5>
                            <h6 className="card-subtitle text-body-secondary"><strong>Software Developer</strong></h6>
                            <p className="card-text ">
                                <div className="skill-cont-job">
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="card card-j" >
                        <div className="card-body">
                            <h5 className="card-title">Sod</h5>
                            <h6 className="card-subtitle text-body-secondary"><strong>Software Developer</strong></h6>
                            <p className="card-text ">
                                <div className="skill-cont-job">
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="card card-j" >
                        <div className="card-body">
                            <h5 className="card-title">Sod</h5>
                            <h6 className="card-subtitle text-body-secondary"><strong>Software Developer</strong></h6>
                            <p className="card-text ">
                                <div className="skill-cont-job">
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="card card-j" >
                        <div className="card-body">
                            <h5 className="card-title">Sod</h5>
                            <h6 className="card-subtitle text-body-secondary"><strong>Software Developer</strong></h6>
                            <p className="card-text ">
                                <div className="skill-cont-job">
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                    <span className="badge badge-pill badge-primary">skill</span>
                                </div>
                            </p>
                        </div>
                    </div>

                    <div className="add-container" >
                        <i className="fa-solid fa-plus"></i>
                        Add Jobs
                    </div>

                </div>
            </div>


            <form className="filter-container">
                <select className="custom-select form-control m-2 w-50">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <input className="form-control m-2 w-50" type="text" placeholder="Enter skills" />
                <button type="submit" className="btn btn-outline-light m-2">Search</button>
            </form>
            <div className="students-container">
                {users.map(user =>
                    <div key={user.userId} className="card text-white bg-dark progress-card">
                        <div className="card-body progress-body">
                            <h5 className="card-title">{user.user_name}</h5>
                            <div className="sk-btn">
                                {/* <div className="skill-container">
                                    {user.roles?.map((skill) => (
                                        <span className="badge badge-pill badge-primary">{skill}</span>
                                    ))}
                                </div> */}
                                <button className="btn btn-outline-light" >View Profile</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default IndustryMain
import React, { useEffect, useState } from "react";
import base from "../../apis/base";
import '../styles/industry.css'
import { UserDb } from "../../types";
import ProfileModal from "./ProfileModal";

interface Paths {
    _id: number,
    role: string,
    similarity?: number,
    description: string,
    skills: String[]
}


const IndustryMain: React.FC = () => {

    const [jobModal, setJobModal] = useState(false);
    const [profileModal, setProfileModal] = useState<string | null>(null);
    const [paths,setPaths]=useState<Paths[]>([])
    const [users, setUsers] = useState<UserDb[]>([])
    const [pathQuery,setPathQuery]=useState("")
    // const [jobs, setJobs] = useState([])

    useEffect(() => {
        base.get(`career/getCareerPaths`).then(res => {
            setPaths(res.data)
        })
    }, [])
    useEffect(() => {
        base.get(`jobs/getallstudents?careerpath=${pathQuery}`).then(
            res => {
                console.log(res.data)
                setUsers(res.data)
            }
        )
    },[pathQuery])

    console.log(profileModal)
    const AddJobModal = () => {
        return <div className="modal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Post Job</h5>
                        <button type="button" className="btn" onClick={e => setJobModal(false)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form >
                        <div className="modal-body">
                            <div className="form-group row m-2">
                                <label className="col-sm-2 col-form-label">Job Title</label>
                                <div className="col-sm-10 ">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label className="col-sm-2 col-form-label">Skill</label>
                                <div className="col-sm-4 ">
                                    <input type="text" className="form-control" />
                                </div>
                                <label className="col-sm-2 col-form-label">Proficiency</label>
                                <div className="col-sm-4 ">
                                    <input type="text" placeholder="Out of 5" className="form-control" />
                                </div>
                            </div>

                            <button className="btn btn-light" type="button" onClick={e => (e)}>Add Skill</button>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-dark">Post</button>
                            <button type="button" className="btn btn-secondary" onClick={e => setJobModal(false)}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }

    return (
        <div className="main-container" >
            <div className="sub-container">
                {jobModal ? AddJobModal() : <></>}
                {profileModal ? <ProfileModal profileModal={profileModal} setProfileModal={setProfileModal} /> : null}
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

                    <button className="btn btn-outline-light add-container" onClick={e => setJobModal(true)} >
                        <i className="fa-solid fa-plus"></i>
                        Add Jobs
                    </button>

                </div>
            </div>


            <form className="filter-container">
                <select onChange={e=>setPathQuery(e.target.value)} className="custom-select form-control m-2 w-50">
                    <option selected>Open this select menu</option>
                    {paths.map(path => (
                        <option key={path?.role} value={path?.role}>{path?.role}</option>
                    ))}
                    
                </select>
            </form>
            <div className="students-container">
                {users.map(user =>
                    <div key={user._id} className="card text-white bg-dark progress-card">
                        <div className="card-body progress-body">
                            <h5 className="card-title">{user.user_name}</h5>
                            <div className="sk-btn">
                                <div className="skill-container">
                                    {user.skills?.map((skill) => (
                                        <span className="badge badge-pill badge-primary">{skill}</span>
                                    ))}
                                </div>
                                <button className="btn btn-outline-light" onClick={e=> setProfileModal(user._id)} >View Profile</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default IndustryMain
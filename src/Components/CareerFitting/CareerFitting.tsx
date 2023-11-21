import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import base from '../../apis/base'
import { addUser } from '../../store'
import { AuthState, User } from '../../types'
import '../styles/careerfitting.css'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface Paths {
    _id: number,
    role: string,
    similarity?: number,
    description: string,
    skills: String[]
}

const CareerFitting = () => {
    const [recommend, setRecommend] = useState<Paths[] | null>(null)
    const [careerPaths, setCareerPaths] = useState<Paths[] | null>(null)
    const [modal, setModal] = useState(false)
    const [selectedPath, setSelectedPath] = useState<Paths | null>(null);
    const navigate: NavigateFunction = useNavigate();
    const user: User = useSelector((state: AuthState) => state.user);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        base.get('career/getCareerPaths').then(res => setCareerPaths(res.data))
        base.get(`career/careerfit?studentId=${user.userId}`)
            .then(res => setRecommend(res.data));
    }, [user.userId])
    const handleChangePath = () => {
        base.put(`career/careerpathupdate?studentId=${user.userId}&careerpath=${selectedPath?.role}`)
        const temp_user: User = user;
        selectedPath ? temp_user.careerPath = selectedPath.role : temp_user.careerPath = null;
        console.log(temp_user);
        dispatch(addUser(temp_user));
        navigate("/", { replace: true });
        setModal(false);
    }

    const modalResource =
        <div className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{selectedPath?.role}</h5>
                        <button type="button" className="close btn" onClick={e => setModal(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{selectedPath?.description}</p>
                        {selectedPath?.skills.map((skill) => (
                            <span className="badge badge-pill badge-primary">{skill}</span>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark" onClick={e => handleChangePath()}>Set Current Path</button>
                        <button type="button" className="btn btn-outline-light" onClick={e => setModal(false)}>Close</button>

                    </div>
                </div>
            </div>
        </div>


    return (

        <div className='cards-container'>
            {modal ? modalResource : null}
            {recommend ?
                <>
                    <div className="head">Recommended Paths</div>
                    {recommend.map((path) => (
                        <div className="card" key={path._id} onClick={e => { setSelectedPath(path); setModal(true); }}  >
                            <div className="card-body">
                                <h5 className="card-title">{path.role}</h5>
                                <h6 className="card-subtitle text-body-secondary"><strong>{path.similarity?.toPrecision(4)}% Match</strong></h6>
                                <p className="card-text">{path.description}</p>
                                <div className="card-badges">
                                    {path.skills.map((skill) => (
                                        <span className="badge badge-pill badge-primary">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}</> : null}
            <div className="head">Career Paths</div>
            {careerPaths?.map((path) => (
                <div key={path._id} className="card " onClick={e => { setSelectedPath(path); setModal(true); }} >
                    <div className="card-body">
                        <h5 className="card-title">{path.role}</h5>
                        <p className="card-text">{path.description}</p>
                        <div className="card-badges">
                            {path.skills.map((skill) => (
                                <span className="badge badge-pill badge-primary">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CareerFitting
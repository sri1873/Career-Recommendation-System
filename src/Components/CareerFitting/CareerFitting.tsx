import React, { useState } from 'react'
import base from '../../apis/base'
import '../styles/careerfitting.css'

const CareerFitting = () => {
    const [recommend, setRecommend] = useState(null)
    const [modal, setModal] = useState(false)
    const [selectedPath, setSelectedPath] = useState({
        id: 1,
        name: 'Front End Developer',
        description: "description",
        Skills: ["HTML", "CSS", "JavaScript"]
    })
    const products = [
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: ["HTML","CSS","JavaScript"]
        },
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: ["React","Bootstrap"]
        },
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: [""]
        },
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: [""]
        },
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: [""]
        },
        {
            id: 1,
            name: 'Front End Developer',
            description: "description",
            Skills: [""]
        },

    ]

    const handleChangePath = () => {

        setModal(false)
    }

    const modalResource =

        <div className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{selectedPath.name}</h5>
                        <button type="button" className="close btn" onClick={e => setModal(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{selectedPath.description}</p>
                        {selectedPath.Skills.map((skill) => (
                            <span className="badge badge-pill badge-primary">{skill}</span>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary" onClick={e=>handleChangePath()}>Set Current Path</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={e => setModal(false)}>Close</button>

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
                    {products.map((product) => (
                        <div className="card" key={product.id} onClick={e => { setModal(true); setSelectedPath(product) }}  >
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle text-body-secondary">Description</h6>
                                <p className="card-text">{product.description}</p>

                            </div>
                        </div>
                    ))}</> : null}
            <div className="head">Career Paths</div>
            {products.map((product) => (
                <div key={product.id} className="card " onClick={e => { setModal(true); setSelectedPath(product) }} >
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle text-body-secondary">Description</h6>
                        <p className="card-text">{product.description}</p>
                        {product.Skills.map((skill) => (
                            <span className="badge badge-pill badge-primary">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CareerFitting
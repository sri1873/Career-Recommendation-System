import React, { useState } from "react";
import '../styles/profile.css';
import { AuthState, User } from "../../types";
import { useSelector } from "react-redux";
import StarGraph from "./StarGraph";
import Streak from "./Streak";
import base from "../../apis/base";


interface UpdateUserType {
    first_name: string | null,
    last_name: string | null,
    phone_number: number | null,
    city: string | null,
    state: string | null,
    country: string | null,
    linkedin: string | null,
    profile_img: string | null
}
const Profile: React.FC = () => {
    const user: User = useSelector((state: AuthState) => state.user);
    const [modal, setModal] = useState(false)
    const [userDetails, setUserDetails] = useState<UpdateUserType>({
        first_name: null,
        last_name: null,
        phone_number: null,
        city: null,
        state: null,
        country: null,
        linkedin: null,
        profile_img: null
    });

    const changeProfile = () => {
        base({
            method: "PUT",
            url: `user/updateuser?studentId=${user.userId}`,
            data: userDetails,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        })

    }
    const picClickHandler = (src: string) => {
        console.log(src)
        setUserDetails(prevState => ({ ...prevState, profile_img: src }))
    }
    const profileModalResource =
        <div className="modal " tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Choose Avatar</h5>
                        <button type="button" className="close btn" onClick={e => setModal(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body body-profile">
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://img.flawlessfiles.com/_r/100x100/100/avatar/one_piece/user-08.jpeg"></img>
                        </div>
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://img.flawlessfiles.com/_r/100x100/100/avatar/one_piece/user-00.jpeg"></img>
                        </div>
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://img.flawlessfiles.com/_r/100x100/100/avatar/one_piece/user-01.jpeg"></img>
                        </div>
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://img.flawlessfiles.com/_r/100x100/100/avatar/one_piece/user-02.jpeg"></img>
                        </div>
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://img.flawlessfiles.com/_r/100x100/100/avatar/one_piece/user-04.jpeg"></img>
                        </div>
                        <div className="profile">
                            <img alt="profile-options" onClick={(e) => picClickHandler(e.currentTarget.src)} src="https://cdn-learn.adafruit.com/guides/images/000/003/613/medium800/Fancy_Octocat_guide_image.png" width={"100px"}></img>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-light" onClick={e => changeProfile()}>Save</button>
                        <button type="button" className="btn btn-outline-light" onClick={e => setModal(false)}>Close</button>

                    </div>
                </div>
            </div>
        </div>

    return (
        <div className="profile-container">
            {modal ? profileModalResource : null}
            <div className="p-details">
                <div onClick={e => setModal(true)}>
                    <img alt="profile-pic" className="p-image" src={user.profile_img ? user.profile_img : "/profile.png"}></img>
                </div>
                <h3>{user.userName?.split('.')[0]}</h3>
                <h6>{user.userName}</h6>
                <div className="btn btn-outline-secondary col-md-12 p-0">Edit Profile</div>
                <span><i className="fa-solid fa-user-graduate"></i>{user.careerPath}</span>
                <span><i className="fa-solid fa-graduation-cap"></i>Year {user.year} Semester {user.semester}</span>
                {user.linkedin ? <a href={user.linkedin}><i className="fa-brands fa-linkedin"></i>in/{user.linkedin.split('/')[user.linkedin.split('/').length - 2]}</a> : null}
            </div>
            <div className="progress-tracker">
                <div className="star-container">
                    <StarGraph />
                </div>
                <div className="streak-container">
                    <Streak />
                </div>
            </div>

        </div>
    )
}

export default Profile
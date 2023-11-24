import React from "react";
import '../styles/profile.css';
import { AuthState, User } from "../../types";
import { useSelector } from "react-redux";


const Profile: React.FC = () => {
    const user: User = useSelector((state: AuthState) => state.user);
    const userInfo = {
        user_name: "K S Sri Kumar",
        email: "kssrikumar180703@gmail.com",
        year: "2",
        semester: "3",
        linkedIn: "https://www.linkedin.com/in/ks-srikumar/",
        carrer_path: "Full Stack Developer",
        _id: "20wusi",
    };
    // const [userInfo, setUserInfo] = useState({
    //     user_name: "K S Sri Kumar",
    //     email: "kssrikumar180703@gmail.com",
    //     year: "2",
    //     semester: "3",
    //     linkedIn: "https://www.linkedin.com/in/ks-srikumar/",
    //     carrer_path:"Full Stack Developer",
    //     _id:"20wusi",
    // });
    return (
        <div className="profile-container ">
            <div className="p-details">
                <div className="p-image"></div>
                <h3>{user.userName?.split('.')[0]}</h3>
                <h6>{user.userName}</h6>
                <div className="btn btn-outline-secondary col-md-12 p-0">Edit Profile</div>
                <span><i className="fa-solid fa-user-graduate"></i>{user.careerPath}</span>
                <span><i className="fa-solid fa-graduation-cap"></i>Year {userInfo.year} Semester {userInfo.semester}</span>
                <a href={userInfo.linkedIn}><i className="fa-brands fa-linkedin"></i>in/{userInfo.linkedIn.split('/')[userInfo.linkedIn.split('/').length - 2]}</a>
            </div>
            <div className="progress-tracker">
                
            </div>

        </div>
    )
}

export default Profile
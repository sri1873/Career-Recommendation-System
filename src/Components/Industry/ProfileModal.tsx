import React, { Dispatch, SetStateAction } from "react";
import DashboardCharts from "../Dashboard/DashboardCharts";
import '../styles/profilemodal.css'

interface PropMod{
    profileModal: string; setProfileModal: Dispatch<SetStateAction<string | null>>;
}
const ProfileModal = (props:PropMod) => {
    return (

        <div className="modal mod-container  modal-lg" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content profilemodal">
                    <div className="modal-header">
                        <h5 className="modal-title">Student Profile</h5>
                        <button type="button" className="btn" onClick={e=>props.setProfileModal("")} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <DashboardCharts/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={e => props.setProfileModal("")} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
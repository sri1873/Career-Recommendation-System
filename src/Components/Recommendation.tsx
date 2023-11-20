import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


import base from "../apis/base";
import './styles/recommendation.css'
import { AuthState, User } from "../types";

const Recommendation = () => {
    const [visibleKey, setVisibleKey] = useState<string | null>(null);
    const [recommendation, setRecommendation] = useState<{ [key: string]: string[] }>({});
    const user: User = useSelector((state: AuthState) => state.user);

    useEffect(() => {
        base.post(`analysis/recommendations?studentId=${user.userId}`).then(res => { setRecommendation(res.data); })
    }, [user.userId])

    const expandRecom = (subject: string) => {
        visibleKey ? visibleKey === subject ? setVisibleKey(null) : setVisibleKey(subject) : setVisibleKey(subject);
    }


    return (
        <div className="recommendation">
            <div className="r-title">Recommendation</div>
            <div className="r-body">
                <ul>
                    {Object.entries(recommendation).map(([subject, strings]) => (
                        <>
                            {strings.length !== 0 ?
                                <>
                                    <li key={subject} onClick={e => expandRecom(subject)}>
                                    <i style={{ height: '1rem' }} className={`fa-solid fa-angle-${visibleKey === subject ? 'right' : 'down'}`}></i>
                                        <div>
                                            <ul className="sub">{subject}</ul>
                                            {strings.map((str, index) => (
                                                <li key={index} className={`sub-point${visibleKey === subject ? '-active' : ''}`}>{str}</li>
                                            ))}
                                        </div>
                                    </li>
                                </>
                                : null}
                        </>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Recommendation;
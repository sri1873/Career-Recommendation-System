import { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { NavigateFunction, useNavigate } from "react-router-dom/dist";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import base from '../../apis/base';
import CustomWebcam from '../../helpers/CustomWebcam';
import Error from '../../helpers/Error';
import { useRestrictCopyPaste, useRestrictescape } from '../../helpers/hook';
import { AuthState, User } from '../../types';
import '../styles/test.css';

interface Question {
    id: number,
    question: string,
    options: { id: number, text: string }[]
    marks: number,
    code: null
}
interface Answers {
    question_id: number,
    answer_id: number
}

const TestMain = () => {
    const temp_answers:Answers[]=[]
    useRestrictCopyPaste({ window, actions: ["copy", "cut", "paste"] })
    useRestrictescape({ window, actions: ["blur"] })
    const user: User = useSelector((state: AuthState) => state.user);
    const handle = useFullScreenHandle();
    const navigate: NavigateFunction = useNavigate();
    const [searchParams] = useSearchParams();
    const [questions, setQuestions] = useState<Question[]>([]);
    const skill = searchParams.get("s")
    useEffect(() => {
        base.get(`questions/getallquestions?studentId=${user.userId}&subject=Java`).then(res => { setQuestions(res.data) })
    }, [skill,user])
    const handleOptionChange = (qId: number, oId: number) => {
        
        const existingAnswerIndex = temp_answers.findIndex(
            (answer) => answer.question_id === qId
        );

        if (existingAnswerIndex !== -1) {
            temp_answers[existingAnswerIndex].answer_id = oId;
        } else {
            temp_answers.push({
                "question_id": qId,
                "answer_id": oId,
            });
        }
    }


const startTest = () => {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    }).then(
        stream => {
            handle.enter()
        }
    ).catch(error => alert("Camera & mic needed to begin test"));

}
const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    alert("Test has been submitted successfully!")
    base({
        method: "POST",
        url: `questions/submitanswers?studentId=${user.userId}&subject=Java`,
        data: {
            "answers": temp_answers
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    })
        .then((res) => {
            navigate('/', { replace: true });
        })

}
console.log(questions)
return (

    <FullScreen className="fullscreenStyle" handle={handle} >
        <Error color={"danger"} message={useSelector((state: AuthState) => state.errorMsg)} />
        {handle.active ?
            <div className="test-container" onContextMenu={e => e.preventDefault()}>
                <form onSubmit={e => testSubmit(e)}>
                    <CustomWebcam />
                    <video className="cam" id='cam' ></video>
                    {questions.map((question) => (
                        <div className='qo-container' key={question.id}>
                            <div className="question">
                                {question.question}
                                {question.code ?
                                    <SyntaxHighlighter language="javascript" style={monokai}>
                                        {question.code}
                                    </SyntaxHighlighter> : <></>
                                }
                            </div>
                            <div className="options">
                                {question.options.map((option) => (
                                    <div className="option-container">
                                        <label>
                                            <input
                                                required
                                                type="radio"
                                                name={`mcqOption-${question.id}`}
                                                value={option.id}
                                                onChange={() => handleOptionChange(question.id, option.id)}
                                            />

                                            {option.text}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button type="submit" className='btn btn-outline-info' >Submit</button>
                </form>
            </div>
            :
            <div className="nofs-container">
                <h3>Rules & Guidelines</h3>
                <ul>
                    <li>You must remain in full screen until test completes.</li>
                    <li>Opening other tabs or going out of the focus will cancel your test.</li>
                    <li>Your <strong>camera</strong> and <strong>mic</strong> must be on at all times.</li>
                    <li>No other person is allowed to enter the room while you are taking the proctored exam</li>
                    <li>We must be able to hear what you hear for the exam to be valid. Therefore do not use headphones, headsets or other similar devices.</li>
                    <li>Any noise and talking will be analysed for suspicious behaviour, so make sure you are in a quiet environment and refrain from talking.</li>
                    <li><strong>If you violate the online proctoring rules and receive an Unsatisfactory status, you automatically receive a score of 0 for the exam. </strong></li>
                    <li style={{ color: "red" }}><strong>Please note that until the duration of test attempting to open new tabs or new windows will be considered cheating you automatically receive a score of 0 for the exam.</strong></li>
                </ul>
                <button className='btn btn-outline-info' onClick={e => startTest()}>
                    Start Test
                </button>
            </div>}
    </FullScreen>

)
}
export default TestMain
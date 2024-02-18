import { useCallback, useEffect, useRef, useState } from 'react';
import { FullScreen, FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { NavigateFunction, useNavigate } from "react-router-dom/dist";
import base from '../../apis/base';
import { AuthState, User } from '../../types';
import '../styles/test.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useRestrictCopyPaste } from '../../helpers/hook';
import Error from '../../helpers/Error';

const questions = [
    {
        id: 1,
        question: 'Through various projects, chapters, and the support structure of the non-profit Wikimedia Foundation, Wikimedia strives to bring about a world in which every single human being can freely share in the sum of all knowledge.Through various projects, chapters, and the support structure of the non-profit Wikimedia Foundation, Wikimedia strives to bring about a world in which every single human being can freely share in the sum of all knowledge.',
        options: [
            {
                id: 1,
                text: 'This is the answer.'
            },
            {
                id: 2,
                text: 'This is not the answer.'
            },
            {
                id: 3,
                text: 'This could be the answer.'
            },
            {
                id: 4,
                text: 'This is the question.'
            },
        ]
    },
    {
        id: 2,
        question: 'What is the question?',
        code: `<SyntaxHighlighter language="javascript" style={docco}>
                {highlightedCode}
            </SyntaxHighlighter>`,
        options: [
            {
                id: 1,
                text: 'This is the answer.'
            },
            {
                id: 2,
                text: 'This is not the answer.'
            },
            {
                id: 3,
                text: 'This could be the answer.'
            },
            {
                id: 4,
                text: 'This is the question.'
            },
        ]
    },
    {
        id: 3,
        question: 'What is the question?',
        code: `<SyntaxHighlighter language="javascript" style={docco}>
                {highlightedCode}
            </SyntaxHighlighter>`,
        options: [
            {
                id: 1,
                text: 'This is the answer.'
            },
            {
                id: 2,
                text: 'This is not the answer.'
            },
            {
                id: 3,
                text: 'This could be the answer.'
            },
            {
                id: 4,
                text: 'This is the question.'
            },
        ]
    },
    {
        id: 4,
        question: 'What is the question?',
        code: `<SyntaxHighlighter language="javascript" style={docco}>
                {highlightedCode}
            </SyntaxHighlighter>`,
        options: [
            {
                id: 1,
                text: 'This is the answer.'
            },
            {
                id: 2,
                text: 'This is not the answer.'
            },
            {
                id: 3,
                text: 'This could be the answer.'
            },
            {
                id: 4,
                text: 'This is the question.'
            },
        ]
    },
]

const TestMain = () => {

    useRestrictCopyPaste({ window, actions: ["copy", "cut", "paste"] })
    const handle = useFullScreenHandle();
    const [isFullscreen, setIsFullscreen] = useState(false);
    const navigate: NavigateFunction = useNavigate();
    const [searchParams] = useSearchParams();
    const [answers, setAnswers] = useState({});
    const skill = searchParams.get("s")
    const user: User = useSelector((state: AuthState) => state.user);

    useEffect(() => {
        // base.get(`test/getMockQuestions?skill=${skill}`).then(res => { })
    }, [skill])
    const handleOptionChange = (qId: number, oId: number) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [qId]: oId,
        }));
    }
    console.log(answers)
    const handleSubmit = () => {
        base({
            method: "POST",
            url: `test/submitMockAnswers?skill=${skill}`,
            data: answers,
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

    return (

        <FullScreen className="fullscreenStyle" handle={handle} >
            <Error color={"danger"} message={useSelector((state: AuthState) => state.errorMsg)} />
            {handle.active ?

                <div className="test-container" onContextMenu={e=>e.preventDefault()}>
                    <form>
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
                        <li style={{color:"red"}}><strong>Please note that until the duration of test you will not be able to open new tabs or new windows any attempt in doing so will be considered cheating you automatically receive a score of 0 for the exam.</strong></li>
                    </ul>
                    <button className='btn btn-outline-info' onClick={handle.enter}>
                        Start Test
                    </button>
                </div>}
        </FullScreen>

    )
}
export default TestMain
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
        code:`<SyntaxHighlighter language="javascript" style={docco}>
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
        code:`<SyntaxHighlighter language="javascript" style={docco}>
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
        code:`<SyntaxHighlighter language="javascript" style={docco}>
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

const Test = () => {


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
    const codeRef: any = useRef(null);
    return (
        <FullScreen className="fullscreenStyle" handle={handle} >
            <button onClick={handle.enter}>
                Enter fullscreen
            </button>
            

            <div className="test-container">
                <form>
                    {questions.map((question) => (
                        <div className='qo-container' key={question.id}>
                            <div className="question">
                                {question.question}
                                {question.code ?
                                <SyntaxHighlighter language="javascript" style={monokai}>
                                    {question.code}
                                </SyntaxHighlighter>:<></>
                                }
                            </div>
                            <div className="options">
                                {question.options.map((option) => (
                                    <div className="option-container">
                                        <label>
                                            <input
                                                type="radio"
                                                name="mcqOption"
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
            <button className="nxt-btn">NEXT</button>

        </FullScreen>
    )
}
export default Test
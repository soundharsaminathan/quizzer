import React from 'react'
import "../Styles/Quizzer.scss"
import imgMainPage from "../Resources/mainpage.jpg"
import quizzerText from "../Resources/QuizzerText.png"
import { useNavigate } from "react-router-dom";


const Quizzer = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className='main-page'>
                <div className='img-container'>
                    <img src={imgMainPage} className='main-img'></img>
                    <img src={quizzerText} className='quizzer-text'></img>
                </div>
                <div className='btn-container'>
                    <button onClick={ () => navigate('/quiz')}>Start</button>
                    <button className='btn-leaderboard' disabled={true}>Leaderboard</button>
                </div>
                <div className='instruction-container'>
                    <h1>Instructions</h1>
                    <ul>
                        <li>This is a timed quiz spanning 15 minutes</li>
                        <li>There are a total of 20 questions</li>
                        <li>Once you submit an answer to a question, you cannot reattempt the same</li>
                        <li>The quiz will end as soon as you deplete all your energy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Quizzer;

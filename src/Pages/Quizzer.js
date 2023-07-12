import React from 'react'
import "../Styles/Quizzer.scss"
import imgMainPage from "../Resources/mainpage.png"
import quizzerText from "../Resources/QuizzerText.png"

const Quizzer = () => {
    return(
        <>
            <div className='main-page'>
                <div className='img-container'>
                    <img src={imgMainPage} className='main-img'></img>
                    <img src={quizzerText} className='quizzer-text'></img>
                </div>
                <div className='btn-container'>
                    <button>Start</button>
                    <button className='btn-leaderboard' disabled={true}>Leaderboard</button>
                </div>
            </div>
        </>
    )
}

export default Quizzer;

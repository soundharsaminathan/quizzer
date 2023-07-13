import { Canvas } from "@react-three/fiber"
import Options from "../Views/Options"
import Question from "../Views/Question"
import HealthMeter from "../Modals/HealthMeter"
import "../Styles/Quiz.scss"
import Mock from "../Modal2/Mock"
import Timer from "../Modals/Timer"
import { questions } from "../Questions/QuestionBank"
import { useState } from "react"
import arrowImage from "../Resources/arrowImage.png"


// import styles from '../Quiz.scss'

const Quiz = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const[gameState, setGameSet] = useState("");
    return(
        <>
            <div className={`red-bg-${gameState}`}></div>
            <div className="canvas">
                <div className="time-counter">
                    <Timer delayResend="899"/>
                </div>
                    <Mock questionNumber={questionNumber} />
                    {/* <div style={{position: "absolute", bottom: "50px", zIndex: "10" ,right:"10px", display: "flex", gap:"20px"}}>
                        <button onClick={()=>{setQuestionNumber(0)}}>prev</button>
                        <button onClick={()=>{setQuestionNumber(1)}}>next</button>
                    </div> */}
                <HealthMeter />
                <div className="arrow-image-container" onClick={()=>{setQuestionNumber(1)}}>
                    <img src={arrowImage} className='arrow-img'></img>
                </div>
            </div>
        </>
    )
}

export default Quiz;
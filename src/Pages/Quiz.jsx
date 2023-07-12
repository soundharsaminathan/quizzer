import { Canvas } from "@react-three/fiber"
import Options from "../Views/Options"
import Question from "../Views/Question"
import HealthMeter from "../Modals/HealthMeter"
import "../Styles/Quiz.scss"
import Mock from "../Modal2/Mock"
import Timer from "../Modals/Timer"

// import styles from '../Quiz.scss'

const Quiz = () => {

    return(
        <>
            <div className="canvas">
                <div className="time-counter">
                    <Timer delayResend="899"/>
                </div>
                {/* <Canvas orthographic camera={{ position: [0, 0, 16], top:16, bottom:-16, left:16, right:-16, zoom:50 }}>
                    <ambientLight intensity={0.3}  />

                    <pointLight position={[10, 8, 0]} color={"white"} />
                    <Options/>
                </Canvas> */}
                <Mock />
                <HealthMeter />
            </div>
            <Question/>
        </>
    )
}

export default Quiz;
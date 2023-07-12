import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Options from "../Views/Options"
import Question from "../Views/Question"
import HealthMeter from "../Modals/HealthMeter"
import "../Styles/Quiz.scss"

// import styles from '../Quiz.scss'

const Quiz = () => {
    return(
        <>
            <div className="canvas">
                <Canvas orthographic camera={{ position: [0, 0, 16], top:16, bottom:-16, left:16, right:-16, zoom:50 }}>
                    <ambientLight intensity={0.3}  />

                    <pointLight position={[10, 8, 0]} color={"white"} />
                    {/* <Environment preset="warehouse" background /> */}
                    <Options/>
                </Canvas>
                <HealthMeter />
            </div>
            <div>
                <Question/>
            </div>
        </>
    )
}

export default Quiz;
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere } from "@react-three/drei"
import Options from "../Views/Options"
import Question from "../Views/Question"
import HealthMeter from "../Modals/HealthMeter"

// import styles from '../Quiz.scss'

const Quiz = () => {
    return(
        <>
            <Canvas orthographic camera={{ position: [0, 0, 16], top:16, bottom:-16, left:16, right:-16, zoom:50 }}>
            {/* <Sphere receiveShadow={false} castShadow={false} position={[-9, 0, 0]}>
                <meshStandardMaterial color="hotpink" />
            </Sphere> */}
                <ambientLight intensity={0.3}  />
                <OrbitControls/>
                <pointLight position={[10, 8, 0]} color={"white"} />
                {/* <Environment preset="warehouse" background /> */}
                <Options/>
            </Canvas>
            <Question/>
            <HealthMeter />
        </>
    )
}

export default Quiz;
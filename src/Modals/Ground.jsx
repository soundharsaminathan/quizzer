import { useThree } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const Ground = () => {
    const ref = useRef()
    const { viewport } = useThree()
    console.log(viewport.height,"height")
    return (
      <RigidBody
        ref={ref}
        colliders="cuboid"
        type="fixed"
        restitution={0.1}
        position={[0, -(viewport.height/2)+2, 0]}
      >
        <mesh>
          <boxGeometry args={[viewport.width+2, 0.1, 4]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </RigidBody>
    )
  }

export default Ground;
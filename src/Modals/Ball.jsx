import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const Ball = ({ euler = new THREE.Euler(), quaternion = new THREE.Quaternion() }) => {
    const ref = useRef()
    const { viewport } = useThree()
    useFrame(({ pointer, viewport }) => {
      console.log("useFrame",pointer,viewport, ref?.current)
      // ref?.current?.setTranslation({ x: 0, y: 0, z: 0 })
      ref.current?.setRotation(quaternion.setFromEuler(euler.set(Math.PI/2, 0, 0)))
    })
    // const onCollisionEnter = () => (ref.current.setTranslation({ x: 0, y: 0, z: 0 }), ref.current.setLinvel({ x: 0, y: 10, z: 0 }))
    return (
      <>
        <RigidBody 
          ref={ref}
          colliders="ball"
          mass={1}
          // type="fixed"
          // position={[0, 0, 0]}
          // position={[-viewport.width/2 + 1.75, 0, 0]}
          // rotation={[Math.PI / 2, 0, 0]}
          // rotation={{x:0,y:0,z:0}}
        >
        <Sphere rotateOnAxis={{axis:'x'}} s args={[0.7]} position={[-viewport.width/2+1, 0, 0]}>
          <meshStandardMaterial color="hotpink" />
        </Sphere>
          {/* <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.70]} />
            <meshStandardMaterial />
          </mesh> */}
        </RigidBody>
        {/* <RigidBody type="fixed" colliders={false} position={[0, -viewport.height, 0]} restitution={2.1} onCollisionEnter={onCollisionEnter}>
          <CuboidCollider args={[30, 2, 30]} />
        </RigidBody> */}
      </>
    )
}

export default Ball;
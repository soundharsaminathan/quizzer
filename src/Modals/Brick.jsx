import { RigidBody } from "@react-three/rapier"

const Brick = ({ position, color }) => (
    <RigidBody colliders="cuboid" type="fixed" position={position} restitution={2.1}>
      <mesh>
        <boxGeometry args={[2.5, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
)

export default Brick;
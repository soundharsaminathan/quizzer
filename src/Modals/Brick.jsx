import { RigidBody } from "@react-three/rapier"
import { RoundedBox } from "@react-three/drei";

const Brick = ({ position, color }) => (
      <RoundedBox args={[5, 2, 1]} position={position} radius={0.2} >
        <meshLambertMaterial attach="material" color={color} />
      </RoundedBox>
)

export default Brick;
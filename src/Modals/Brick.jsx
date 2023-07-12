import { RigidBody } from "@react-three/rapier"
import { RoundedBox } from "@react-three/drei";
import { useCallback, useEffect, useState } from "react";

const Brick = ({ position, color }) => {
  const [hovered, setHover] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  const onPointerOver = useCallback(() => setHover(true), [])
  const onPointerOut = useCallback(() => setHover(false), [])
  return (
    <RigidBody 
      colliders="cuboid"
      type="fixed"
    >
        <RoundedBox
          args={[5, 2, 1]}
          position={position}
          radius={0.2}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        >
          <meshLambertMaterial attach="material" color={color} />
        </RoundedBox>
    </RigidBody>
  )
}

export default Brick;
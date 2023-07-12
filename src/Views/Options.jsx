import { Physics } from "@react-three/rapier"
import Ball from "../Modals/Ball";
import Ground from "../Modals/Ground";
import Brick from "../Modals/Brick";

const Options = () =>{
    return (
    <Physics gravity={[0, -30, 0]}>
        <Ball />
        <Brick position={[-8,1,0]} />
        <Brick position={[-2,3,0]} />
        <Brick position={[4,3,0]} />
        <Brick position={[10,1,0]} />
        <Ground />
    </Physics>
    );
}

export default Options;
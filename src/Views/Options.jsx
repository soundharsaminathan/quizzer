import { Physics } from "@react-three/rapier"
import Ball from "../Modals/Ball";
import Ground from "../Modals/Ground";
import Brick from "../Modals/Brick";

const Options = () =>{
    return (

        <>
    <Physics gravity={[0, -30, 0]}>
        <Ball />
        <Brick position={[-10,0,0]} />
        <Ground />
    </Physics>
        </>
    );
}

export default Options;
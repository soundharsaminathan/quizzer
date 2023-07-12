import { Physics } from "@react-three/rapier"
import Ball from "../Modals/Ball";
import Ground from "../Modals/Ground";

const Options = () =>{
    return (
    <Physics gravity={[0, -30, 0]}>
        <Ball />
        {/* // <Brick color="pink" position={[-12, 3.5, 0]} /> */}
        <Ground />
    </Physics>
    );
}

export default Options;
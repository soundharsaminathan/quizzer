import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
import { useState } from "react";
const Mock = () => {
    const [isMoving, setMoving] = useState(false);
    const [isBounce, setBounce ] = useState(false);

    return (
        <>
            <div className="floor" onKeyDown={(event)=>{
                if(event.key === 'ArrowRight') {
                    console.log('Move');
                }
            }}>
                <Ball position={0} isMoving={isMoving} isBounce={isBounce}/>
                <Box position={[10, 50]} answer={"Option 1"}/>
                <Box position={[30, 30]} answer={"Option 2"}/>
                <Box position={[50, 30]} answer={"Option 3"}/>
                <Box position={[70, 50]} answer={"Option 4"}/>
            </div>
        </>
    )
}

export default Mock;
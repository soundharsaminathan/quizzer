import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
const Mock = () => {
    const ref = useRef(null);
    const [position, setPosition] = useState(80);
    useEffect(()=>{
        document.addEventListener('keydown',detectKey, true);
    })
    const detectKey = (e) =>{
        console.log(e.key,"hh",ref.current?.offsetWidth)
        if(e.key == "ArrowRight"){
            setPosition(position + 160);
        } else if (e.key == "ArrowLeft"){
            setPosition(position - 160);
        }
    }
    return (
        <>
            <div ref={ref} className="floor">
                <Ball position={position}/>
                <Box position={[10, 50]} answer={"Option 1"}/>
                <Box position={[30, 30]} answer={"Option 2"}/>
                <Box position={[50, 30]} answer={"Option 3"}/>
                <Box position={[70, 50]} answer={"Option 4"}/>
            </div>
        </>
    )
}

export default Mock;
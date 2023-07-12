import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
const Mock = () => {
    const ref = useRef(null);
    const [position, setPosition] = useState(80);
    const [isKeyDown, setIsKeyDown] = useState(false);
    useEffect(()=>{
        document.addEventListener('keydown',detectKey, true);
        document.addEventListener('keyup',releaseKey, true);
    })
    const detectKey = (e) =>{
        if(isKeyDown){
            return;
        }
        console.log("hh",ref.current?.offsetWidth,position)
        const width = ref.current?.offsetWidth;
        if(e.key == "ArrowRight" && position+100 < width){
            setPosition(position + (width / 10));
        } else if (e.key == "ArrowLeft" && position > (width / 10)){
            setPosition(position - (width/10));
        }
        setIsKeyDown(true)
    }
    const releaseKey = () => {
        setIsKeyDown(false)
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
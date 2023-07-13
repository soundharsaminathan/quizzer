import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
const Mock = () => {
    const ref = useRef(null);
    const [position, setPosition] = useState(80);
    const [isKeyDown, setIsKeyDown] = useState(false);
    const [bounce, setBounce] = useState(0);
    const [isBounce, setIsBounce] = useState(false);

    useEffect(()=>{
        document.addEventListener('keydown',detectKey, true);
        // document.addEventListener('keyup',releaseKey, true);
    })
    const detectKey = (e) =>{
        console.log(position,"bounce",isBounce)
        if(isKeyDown){
            return;
        }
        else{
            console.log(position,isBounce, '--2')
            const width = ref.current?.offsetWidth;
            if(e.key == "ArrowRight" && position+100 < width && !isBounce){
                setPosition(position + (width / 10));
            } else if (e.key == "ArrowLeft" && position > (width / 10) && !isBounce){
                setPosition(position - (width/10));
            } else if (e.key == "ArrowUp"){
                if(position == 80 + (width/10) || position > 80 + 6*(width/10))
                {
                    setBounce(-125)
                }
                else{
                    setBounce(-230)
                }
                // setIsBounce(true)
                // setTimeout(()=>{
                //     // setIsBounce(false)
                //     setBounce(0)
                //     console.log("isBounce : f")
                // }, 2900);
            }
        }
        setIsKeyDown(true)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setIsKeyDown(false)
        }, 1000)
    },[isKeyDown])

    // const releaseKey = () => {
    //     setIsKeyDown(false)
    // }
    return (
        <>
            <div ref={ref} className="floor">
                <Ball position={position} bounce={bounce} setBounce={setBounce} setIsBounce={setIsBounce}/>
                <Box position={[10, 50]} answer={"Option 1"}/>
                <Box position={[30, 30]} answer={"Option 2"}/>
                <Box position={[50, 30]} answer={"Option 3"}/>
                <Box position={[70, 50]} answer={"Option 4"}/>
            </div>
        </>
    )
}

export default Mock;
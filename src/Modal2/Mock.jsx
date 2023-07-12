import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
const Mock = () => {
    const ref = useRef(null);
    useEffect(()=>{
        document.addEventListener('keydown',detectKey, true);
    })
    const detectKey = (e) =>{
        console.log(e.key,"hh",ref.current.offsetWidth)

    }
    return (
        <>
            <div ref={ref} className="floor">
                <Ball />
                <Box position={[10, 50]} answer={"Option 1"}/>
                <Box position={[30, 30]} answer={"Option 2"}/>
                <Box position={[55, 30]} answer={"Option 3"}/>
                <Box position={[80, 50]} answer={"Option 4"}/>
            </div>
        </>
    )
}

export default Mock;
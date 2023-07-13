import { useEffect, useState } from "react";
import "../Styles2/Ball.scss"

const Ball = ({position, bounce}) => {
    // useEffect(()=>{

    // },[position])
    const startCoordinates = { x: 0, y: 0 }; // Example starting coordinates
    const endCoordinates = { x: position, y: 0 }; // Example ending coordinates

    const distanceX = endCoordinates.x - startCoordinates.x;
    const distanceY = endCoordinates.y - startCoordinates.y;

    const animationStyle = {
        // animation: `bounce 3s infinite`,
        transition: `3s all`,
        transform: `translate(${distanceX}px, ${distanceY}px) rotate(360deg)`,
    };


    return (
        <>
            <div  className={"ball "} style={bounce ? undefined :animationStyle}></div>
        </>
    )
}

export default Ball;
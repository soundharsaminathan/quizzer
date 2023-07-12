import { useEffect, useState } from "react";
import "../Styles2/Ball.scss"

const Ball = ({position, isMoving, isBounce}) => {

    const [posX,setPosX] = useState(80);
    // useEffect(()=>{

    // },[position])
    const startCoordinates = { x: 0, y: 0 }; // Example starting coordinates
    const endCoordinates = { x: position, y: 0 }; // Example ending coordinates

    const distanceX = endCoordinates.x - startCoordinates.x;
    const distanceY = endCoordinates.y - startCoordinates.y;

    const animationStyle = {
        animation: `moveBall 3s linear forwards`,
        transition: `3s all`,
        transform: `translate(${distanceX}px, ${distanceY}px) rotate(360deg)`,
    };


    return (
        <>
            <div  className="ball" style={animationStyle}></div>
        </>
    )
}

export default Ball;
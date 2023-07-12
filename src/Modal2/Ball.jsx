import { useEffect } from "react";
import "../Styles2/Ball.scss"

const Ball = ({position, isMoving, isBounce}) => {
    let styles = 'ball';
    styles += isBounce ? ' bounce' : '';

    const startCoordinates = { x: 0, y: 0 }; // Example starting coordinates
    const endCoordinates = { x: 800, y: 0 }; // Example ending coordinates

    const distanceX = endCoordinates.x - startCoordinates.x;
    const distanceY = endCoordinates.y - startCoordinates.y;

    const animationStyle = {
        animation: `moveBall 10s linear forwards`,
        transition: `10s all`,
        transform: `translate(${distanceX}px, ${distanceY}px) rotate(360deg)`,
    };

    useEffect(()=>{
        if(isMoving) {
            styles += 'spin';
        }
    })

    return (
        <>
            <div  className="ball" style={animationStyle}></div>
        </>
    )
}

export default Ball;
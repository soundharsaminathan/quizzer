import { useEffect, useState } from "react";
import "../Styles2/Ball.scss"

const Ball = ({position, bounce, setBounce, setIsBounce}) => {
    // useEffect(()=>{

    // },[position])
    const [posY, setPosY] = useState(0)
    // console.log('change',position,bounce)
    const py = bounce;
    const startCoordinates = { x: 0, y: 0 }; // Example starting coordinates
    const endCoordinates = { x: position, y: py }; // Example ending coordinates

    const distanceX = endCoordinates.x - startCoordinates.x;
    const distanceY = endCoordinates.y - startCoordinates.y;

    const animationStyle = {
        transition: `1s all`,
        transform: `translate(${distanceX}px, ${distanceY}px) rotate(360deg)`,
    };
    if(bounce){
        animationStyle.animation = `bounce 1s`
    }
    useEffect(()=>{
        if(bounce){
            setTimeout(()=>{
                setBounce(0)
            },900)
            setTimeout(() => {
                setIsBounce(false)
            }, 6000);
        }
    },[bounce])


    return (
        <>
            <div  className={"ball "} style={animationStyle}></div>
        </>
    )
}

export default Ball;
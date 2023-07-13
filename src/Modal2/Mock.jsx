import Ball from "./Ball";
import Box from "./Box";
import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Question from "../Views/Question";
import { questions } from "../Questions/QuestionBank";

const Mock = ({questionNumber}) => {
    const ref = useRef(null);
    const [position, setPosition] = useState(80);
    const [isKeyDown, setIsKeyDown] = useState(false);
    const [bounce, setBounce] = useState(0);
    const [isBounce, setIsBounce] = useState(false);

    const [isSelected, setSelected] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    const handleSection = () => {
        const width = ref.current?.offsetWidth;
        console.log(width/10, " 10 perc width", width/10+100, " 10 p + 110");
        console.log(width * 3/10, " 10 perc width", width * 3/10+100, " 10 p + 110");
        console.log(width * 5/10, " 10 perc width", width * 5/10+100, " 10 p + 110");
        console.log(width * 7/10, " 10 perc width", width * 7/10+100, " 10 p + 110");
        console.log(isSelected);
        if(position >= (width/10) && position < (width/10)+110) {
            setSelected(!isSelected);
            setSelectedOption(1);
        } else if(position >= (width * 3/10) && position < ((width * 3/10)+100)) {
            setSelected(!isSelected);
            setSelectedOption(2);
        } else if(position >= (width * 5/10) && position < ((width * 5/10)+100)) {
            setSelected(!isSelected);
            setSelectedOption(3);
        } else if(position >= (width * 7/10) && position < ((width * 7/10)+100)) {
            setSelected(!isSelected);
            setSelectedOption(4);
        } else {
            setSelected(isSelected);
        }
    } 

    useEffect(()=>{
        document.addEventListener('keydown',detectKey, true);
        // document.addEventListener('keyup',releaseKey, true);
    })

    const detectKey = (e) =>{
        console.log(position,"bounce",isBounce)
        if(isKeyDown){
            return;
        }
        console.log("hh",ref.current?.offsetWidth,position)
        const width = ref.current?.offsetWidth;
        if(e.key == "ArrowRight" && position+100 < width){
            setPosition(position + (width / 10));
        } else if (e.key == "ArrowLeft" && position > (width / 10)){
            setPosition(position - (width/10));
        } else if (e.key == "ArrowUp") {
            handleSection();
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
                <Ball position={position}/>
            </div>
            {questions[questionNumber].options?.map((option, index)=>{
                let y = ((index == 0) || (index == questions[questionNumber].options?.length-1))? 50 : 30;
                return (
                    <Box position={[(index*20)+10, y]} option={option} isSelected={isSelected}/>
                )
            })}
            
            {/* <Box position={[30, 30]} answer={"Option 2"} isSelected={isSelected}/>
            <Box position={[50, 30]} answer={"Option 3"} isSelected={isSelected}/>
            <Box position={[70, 50]} answer={"Option 4"} isSelected={isSelected}/> */}
            <Question question={questions[questionNumber].question}/>
        </>
    )
}

export default Mock;
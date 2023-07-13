import Ball from "./Ball";
import Box from "./Box";
import "../Styles2/Mock.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Question from "../Views/Question";
import { questions } from "../Questions/QuestionBank";

const Mock = ({ questionNumber }) => {
   const ref = useRef(null);
   const [position, setPosition] = useState(0);
   const [isKeyDown, setIsKeyDown] = useState(false);
   const [isSelected, setSelected] = useState(false);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const [bounce, setBounce] = useState(false)
   const [iBounce, setIsBounce] = useState(false)

   const handleSection = () => {
      const width = ref.current?.offsetWidth;
      console.log(width / 10, " 10 perc width", width / 10 + 100, " 10 p + 110");
      console.log(
         (width * 3) / 10,
         " 10 perc width",
         (width * 3) / 10 + 100,
         " 10 p + 110"
      );
      console.log(
         (width * 5) / 10,
         " 10 perc width",
         (width * 5) / 10 + 100,
         " 10 p + 110"
      );
      console.log(
         (width * 7) / 10,
         " 10 perc width",
         (width * 7) / 10 + 100,
         " 10 p + 110"
      );
      console.log(position,width,"pow");
      if (position >= width/5 && position < width*2/5) {
         setSelected(!isSelected);
         if(selectedOptions.includes(1)){
            setSelectedOptions([...selectedOptions.filter(op=>op != 1)])
        } else {
             setSelectedOptions([...selectedOptions,1])
         }
      } else if (position >= width*2/5 && position < width*3/5) {
         setSelected(!isSelected);
         if(selectedOptions.includes(2)){
            setSelectedOptions([...selectedOptions.filter(op=>op != 2)])
        } else {
             setSelectedOptions([...selectedOptions,2])
         }
      }else if (position >= width*3/5 && position < width*4/5){
         setSelected(!isSelected);
         if(selectedOptions.includes(3)){
            setSelectedOptions([...selectedOptions.filter(op=>op != 3)])
        } else {
             setSelectedOptions([...selectedOptions,3])
         }
      }else if (position >= width*4/5 && position < width*4.5/5){
         setSelected(!isSelected);
         if(selectedOptions.includes(4)){
            setSelectedOptions([...selectedOptions.filter(op=>op != 4)])
        } else {
             setSelectedOptions([...selectedOptions,4])
         }
      } else {
         setSelected(isSelected);
      }
   };

   useEffect(() => {
      document.addEventListener("keydown", detectKey, true);
      document.addEventListener("keyup", releaseKey, true);
   });

   const detectKey = (e) => {
      if (isKeyDown) {
         return;
      }
      const width = ref.current?.offsetWidth;
      if (e.key == "ArrowRight" && position + 100 < width) {
         setPosition(position + width * 20/100);
      } else if (e.key == "ArrowLeft" && position > width / 10) {
         setPosition(position - width * 20/100);
      } else if (e.key == "ArrowUp") {
         console.log("hh", ref.current?.offsetWidth, position);
         handleSection();
      }
      setIsKeyDown(true);
   };
   const releaseKey = () => {
      setIsKeyDown(false);
   };
   return (
      <>
         {" "}
         <div ref={ref} className="floor">
            <Ball position={position} bounce setBounce={setBounce} setIsBounce ={setIsBounce}/> {" "}
         </div>
         {" "}
         {questions[questionNumber].options?.map((option, index) => {
            let y =
               index == 0 || index == questions[questionNumber].options?.length - 1
                  ? 50
                  : 30;
            let isSelected = selectedOptions.includes(index+1);
            console.log(selectedOptions, " isS");
            return (
               <Box
                  position={[index * 20 + 15, y]}
                  option={option}
                  isSelected={isSelected}
               />
            );
         })}
         {" "}
         {/* <Box position={[30, 30]} answer={"Option 2"} isSelected={isSelected}/>
         <Box position={[50, 30]} answer={"Option 3"} isSelected={isSelected}/>
         <Box position={[70, 50]} answer={"Option 4"} isSelected={isSelected}/> */}
         <Question question={questions[questionNumber].question} />
         {" "}
      </>
   );
};

export default Mock
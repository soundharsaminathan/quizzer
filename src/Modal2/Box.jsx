import "../Styles2/Box.scss";

const Box = ({answer, position}) => {
    let transformXValue = 100;
    // let transformXValue = position[0];
    let transformYValue = -500;
    // let transformYValue = position[1];

    
    const styles = {
        transform: `translateX(${transformXValue}px) translateY(${transformYValue}px)`
    };

    return (
        <div className="box" style={styles}>
            <p>{answer}</p>    
        </div>
    )
}

export default Box;
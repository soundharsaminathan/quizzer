import "../Styles2/Box.scss";

const Box = ({position, option, isSelected}) => {

    const styles = {
        left: `${position[0]}%`,
        top: `${position[1]}%`
    };

    return (
        <div className={"box " + (isSelected && "selected")} style={styles}>
            <span>{option}</span>    
        </div>
    )
}

export default Box;
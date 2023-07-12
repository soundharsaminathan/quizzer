import "../Styles2/Box.scss";

const Box = ({answer, position}) => {

    const styles = {
        left: `${position[0]}%`,
        top: `${position[1]}%`
    };

    return (
        <div className="box" style={styles}>
            <span>{answer}</span>    
        </div>
    )
}

export default Box;
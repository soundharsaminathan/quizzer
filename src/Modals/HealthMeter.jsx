import "../Styles/HealthMeter.scss";

const HealthMeter = ({percentage}) => {
    let color = "#33FF00";
    let width = "80%";
    return (
        <div className="health-meter-container">
            <div className="health-meter" style={{backgroundColor:color, width:width}}></div>
        </div>
    )
}

export default HealthMeter;
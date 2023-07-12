import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
const Mock = () => {
    return (
        <>
            <div className="floor">
                <Ball />
                <Box position={[10, 50]} />
                <Box position={[30, 50]} />
                <Box position={[55, 50]} />
                <Box position={[80, 50]} />
            </div>
        </>
    )
}

export default Mock;
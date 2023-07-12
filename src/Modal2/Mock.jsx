import Ball from "./Ball";
import Box from "./Box";

import "../Styles2/Mock.scss";
const Mock = () => {
    return (
        <>
            <div className="floor">
                <Ball />
                <Box position={[10, 50]} answer={"Option 1"}/>
                <Box position={[30, 50]} answer={"Option 2"}/>
                <Box position={[55, 50]} answer={"Option 3"}/>
                <Box position={[80, 50]} answer={"Option 4"}/>
            </div>
        </>
    )
}

export default Mock;
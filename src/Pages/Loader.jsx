import loaderGif from "../Resources/ball-loader.gif";
import '../Styles2/Loader.scss';

const Loader = () => {
    return (
        <>
            <div>
                <img src={loaderGif} className="loader"/>
            </div>
        </>
    )
}

export default Loader;
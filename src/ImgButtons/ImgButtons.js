import leftArrow from "../imgs/arrowLeft.png";
import rightArrow from "../imgs/arrowRight.png";
import Image from "react-bootstrap/Image";

export default function ImgButtons(props) {
    const imageStyle = {
        width: "60px",
        height: "60px",
        marginLeft: "2em",
        marginRight: "2em",
    };

    const btnStyle = {
        backgroundColor: "transparent",
        border: 0,
    };

    return (
        <div
            style={{ height: "200px", marginBottom: "0" }}
            className="d-flex justify-content-center align-items-center flex-row"
        >
            <button
                style={
                    props.currIdx === 1
                        ? { ...btnStyle, opacity: 0.5, pointerEvents: "none" }
                        : btnStyle
                }
                onClick={() => {
                    props.onButtonClicked("L");
                }}
            >
                <Image style={imageStyle} src={leftArrow}></Image>
            </button>

            <p className="m-0">
                {props.currIdx}/{props.arrLen}
            </p>

            <button
                style={
                    props.currIdx === props.arrLen
                        ? { ...btnStyle, opacity: 0.5, pointerEvents: "none" }
                        : btnStyle
                }
                onClick={() => {
                    props.onButtonClicked("R");
                }}
            >
                <Image style={imageStyle} src={rightArrow}></Image>
            </button>
        </div>
    );
}

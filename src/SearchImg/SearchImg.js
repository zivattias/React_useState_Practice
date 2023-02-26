import { Image } from "react-bootstrap";

export default function SearchImg(props) {
    console.log("Rendering SearchImg", props);
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Image
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
                src={props.imgUrl}
                rounded
                fluid
            />
        </div>
    );
}

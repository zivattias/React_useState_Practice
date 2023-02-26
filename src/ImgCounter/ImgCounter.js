import Badge from "react-bootstrap/Badge";

export default function ImgCounter(props) {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h5>
                Total searches{" "}
                <Badge bg="secondary">{props.totalSearches}</Badge>
            </h5>
            <h5>
                Total images found{" "}
                <Badge bg="secondary">{props.imagesFound}</Badge>
            </h5>
        </div>
    );
}

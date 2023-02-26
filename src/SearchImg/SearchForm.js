import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import ImgButtons from "../ImgButtons/ImgButtons.js";
import ImgCounter from "../ImgCounter/ImgCounter.js";
import { IMG_DATA } from "./imgsData.js";
import SearchImg from "./SearchImg";

export default function SearchForm(props) {
    const [searchText, setSearchText] = useState("");
    const [currImgUrl, setCurrImgUrl] = useState(null);
    const [currImgIdx, setImgIdx] = useState(0);
    const [totalSearches, setTotalSearches] = useState(0);
    const [imagesFound, setImagesFound] = useState(0);

    const handleTextSubmit = (event) => {
        event.preventDefault();
        console.log(IMG_DATA);

        if (searchText.toLowerCase() in IMG_DATA) {
            console.log(IMG_DATA.searchText);
            // setCurrImgUrl(IMG_DATA[searchText][currImgIdx]);
            if (Array.isArray(IMG_DATA[searchText])) {
                setCurrImgUrl(IMG_DATA[searchText][0]);
            } else {
                setCurrImgUrl(IMG_DATA[searchText]);
            }
            setImagesFound((n) => n + 1);
        } else {
            setCurrImgUrl("NOT_FOUND");
        }
        setTotalSearches((n) => n + 1);
        setImgIdx(0);
    };

    const handleResetButton = () => {
        setCurrImgUrl(null);
        setSearchText("");
    };

    const getImagesAmount = (searchText) => {
        if (Array.isArray(IMG_DATA[searchText])) {
            return IMG_DATA[searchText].length;
        }
        return 1;
    };

    const handleImagesIndex = (direction) => {
        console.log(currImgIdx);
        if (direction === "R") {
            if (currImgIdx !== IMG_DATA[searchText].length - 1) {
                setImgIdx((n) => n + 1);
                setCurrImgUrl(IMG_DATA[searchText][currImgIdx + 1]);
            }
        } else if (direction === "L") {
            if (currImgIdx !== 0) {
                setImgIdx((n) => n - 1);
                setCurrImgUrl(IMG_DATA[searchText][currImgIdx - 1]);
            }
        }
        console.log(currImgIdx);
    };

    return (
        <Stack gap={5} className="col-md-5 mx-auto">
            <Form className="col-md-5 mx-auto" onSubmit={handleTextSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="mt-5">Search for image:</Form.Label>
                    {/* Controlled component */}
                    <Form.Control
                        type="text"
                        placeholder="Insert your text here"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                    <Button className="me-4" variant="primary" type="submit">
                        Show
                    </Button>
                    {currImgUrl && (
                        <Button
                            onClick={handleResetButton}
                            variant="outline-primary"
                            type="reset"
                        >
                            Clear
                        </Button>
                    )}
                </div>
            </Form>
            <ImgCounter
                totalSearches={totalSearches}
                imagesFound={imagesFound}
            ></ImgCounter>
            {currImgUrl === "NOT_FOUND" && (
                <Alert variant="danger">No image found!</Alert>
            )}
            {currImgUrl !== "NOT_FOUND" && currImgUrl !== null && (
                <>
                    <SearchImg imgUrl={currImgUrl} />
                    <ImgButtons
                        onButtonClicked={handleImagesIndex}
                        currIdx={currImgIdx + 1}
                        arrLen={getImagesAmount(searchText)}
                    ></ImgButtons>
                </>
            )}
        </Stack>
    );
}

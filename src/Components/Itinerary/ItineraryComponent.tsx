import { Container, Row, Col } from "react-bootstrap";
import "./ItineraryComponent.css";
import "../../Sources/CommonStyleSheet.css"
import leftArrow from '../../asseets/leftArrow.png';
import rightArrow from '../../asseets/rightArrow.png';
import church from '../../asseets/church.png';
import party from '../../asseets/party.png';
import { useState } from "react";

const ItineraryComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentItemsToDisplay = 2;

    return (
        <Container fluid className="background-image-itinerary d-flex flex-column">
            <Row>
                <Col><h1 className="wedding-font center-text">Itinerario</h1></Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center text-center my-auto">
                <Col className="d-flex icon justify-content-start" style={{ paddingLeft: "5%" }}><img src={leftArrow} alt="Left arrow" className="icon" onClick={() => setCurrentIndex(getIndex(currentIndex, currentItemsToDisplay, true))}/></Col>
                {((currentIndex === 0) && (
                    <Col>
                        <img src={church} alt="icon" className="main-icon" />
                        <h1 className="wedding-font-sm" style={{ marginBottom: "0px" }}>Iglesia</h1>
                        <h1 style={{ paddingTop: "2px" }} className="wedding-font-xsm">1:30PM</h1>
                    </Col>
                ))}
                {((currentIndex === 1) && (
                    <Col>
                        <img src={party} alt="icon" className="main-icon" />
                        <h1 className="wedding-font-sm" style={{ marginBottom: "0px" }}>Fiesta</h1>
                        <h1 style={{ paddingTop: "2px" }} className="wedding-font-xsm">4:00PM</h1>
                    </Col>
                ))}
                <Col className="icon d-flex justify-content-end" style={{ paddingRight: "5%" }}><img src={rightArrow} alt="Right arrow" className="icon" onClick={() => setCurrentIndex(getIndex(currentIndex, currentItemsToDisplay))}/></Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center mx-auto" style={{ paddingTop: "5%", paddingBottom: "20px" }}>
                <Col><div className="square" style={{ minHeight: "12px", minWidth: "12px", backgroundColor: currentIndex === 0 ? 'white' : "transparent" }}></div></Col>
                <Col><div className="square" style={{ minHeight: "12px", minWidth: "12px", backgroundColor: currentIndex === 1 ? 'white' : "transparent" }}></div></Col>
            </Row>
        </Container>
    )
};

export default ItineraryComponent;

function getIndex(index: number, total: number, reverse: boolean = false) {
    if (reverse) {
        if(index === 0) {
            return total - 1
        }
        return index - 1
    }
    if(index + 1 === total){
        return 0
    }
    return index + 1
}
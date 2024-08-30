import "./JoinUsComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { Container, Row, Col } from "react-bootstrap";

const JoinUsComponent = () => {

    return (
        <Container fluid className="background-image-join-us" style={{ backgroundColor: "white", marginTop: "10px", padding: "10vh" }}>
            <Row>
                <Col>
                    <img src={require("../../asseets/Logo_Green_PNG.png")} alt="Loading" className="resize-logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="center wedding-paragraph-font slide-in-right" style={{ paddingTop: "10vh" }}>"Nuestra boda esta por llegar"</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="center wedding-paragraph-font slide-in-left" style={{ paddingTop: "5vh" }}>Hemos decidido dar el siguiente paso en nuestra historia y queremos que formes parte de ella.</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default JoinUsComponent;
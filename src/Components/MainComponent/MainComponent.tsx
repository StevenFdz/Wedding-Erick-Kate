import { Container, Row, Col } from "react-bootstrap";
import "./MainComponent.css";
import "../../Sources/CommonStyleSheet.css"

const MainComponent = () => {
    return(
        <Container fluid className="background-image" style={{height: "100%", minHeight: "100vh"}}>
            <Row>
                <Col>
                    <h1 className="center-items wedding-font" style={{paddingRight: "5px", paddingLeft: "5px"}}>Erick & Katherine</h1>
                </Col>
            </Row>
            <Row>
                <h3 className="center wedding-font-sm">19.10.24</h3>
            </Row>
            
        </Container>
    );
};

export default MainComponent;
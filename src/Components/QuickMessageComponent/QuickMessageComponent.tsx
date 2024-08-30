import { Container, Row, Col } from "react-bootstrap";
import "./QuickMessageComponent.css";
import "../../Sources/CommonStyleSheet.css"

const QuickMessageComponent = ({message, color}: any) => {
    return(
        <Container fluid style={{backgroundColor: color}}>
            <Row>
                <Col><h1 className="wedding-font-sm scale">{message}</h1></Col>
            </Row>
        </Container>
    )
};

export default QuickMessageComponent;
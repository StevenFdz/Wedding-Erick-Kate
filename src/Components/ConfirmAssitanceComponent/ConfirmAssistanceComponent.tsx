import { Container, Row, Col, Dropdown, DropdownButton, ListGroup } from "react-bootstrap";
import "./ConfirmAssistanceComponent.css";
import "../../Sources/CommonStyleSheet.css"
import whatsapp from '../../asseets/whatsapp.png';

const ConfirmAssistanceComponent = () => {

    return (
        <Container fluid className="background-image-confirm-assistance" >
            <div style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <Row>
                    <Col><h1 className="wedding-font-sm center-text blue-green">Confirmar asistencia</h1></Col>
                </Row>
                <Row>
                    <Col><h3 className="wedding-font-xsm center-text lateral-padding blue-green">Les solicitamos que si desea asistir al evento confirme su asistencia antes del "01 de Octubre" al número</h3></Col>
                </Row>
                <Row>
                    <Col><h1 className="wedding-font-sm center-text lateral-padding blue-green">8664-4596</h1></Col>
                </Row>
                <Row>
                    <Col><h1 className="wedding-font-xsm center-text lateral-padding blue-green">o envie un mensaje por Whatsapp haciendo click en el siguiente ícono</h1></Col>
                </Row>
                <Row className="align-items-center justify-content-center text-center mx-auto">
                    <Col>
                    <a href="https://wa.me/86644596?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Katherine%20y%20Erick.%20Atentamente:%20Por%20favor%20escriba%20su%20nombre%20y%20el%20de%20los%20invitados%20a%20asistir%20o%20bien%20solamente%20el%20de%20su%20familia." target="_blank">
                        <img src={whatsapp} alt="icon" className="whatsapp-icon" style={{marginTop: "2%"}}/>
                    </a>
                    </Col>
                </Row>
            </div>
        </Container>
    )
};

export default ConfirmAssistanceComponent;

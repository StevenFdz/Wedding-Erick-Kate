import { Container, Row } from "react-bootstrap";
import "./GoodWishes.css";
import "../../Sources/CommonStyleSheet.css"
import WifeIcon from "../../asseets/WifeIcon.png"
import HusbandIcon from "../../asseets/HusbandIcon.png"

const GoodWishesComponent = () => {

    return (
        <Container fluid className="background-image-gallery d-flex flex-column">
            <Row>
                <div className="col-12">
                    <h1 className="wedding-font center-text">Con la bendición de nuestros padres</h1>
                </div>
            </Row>
            <Row className="good-wishes-content">
                <div className="col-sm-6">
                    <Row><div className="col-12"><div className="dress-code-icon-container"><img src={HusbandIcon} className="good-wishes-icon" /></div></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm scale">Alfredo Segura Moya</h1></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm">&</h1></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm scale">Lidiette Solano Rodríguez</h1></div></Row>
                </div>
                <div className="col-sm-6">
                    <Row><div className="col-12"><div className="dress-code-icon-container"><img src={WifeIcon} className="good-wishes-icon" /></div></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm scale">Luis Fernández Sandoval</h1></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm">&</h1></div></Row>
                    <Row><div className="col-12"><h1 className="wedding-font-sm scale">Carmen Berrocal Segura</h1></div></Row>
                </div>
            </Row>
        </Container>
    )

};

export default GoodWishesComponent;
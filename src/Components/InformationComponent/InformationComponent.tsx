import { Container, Row } from "react-bootstrap";
import "./InformationComponent.css";
import "../../Sources/CommonStyleSheet.css"
import giftIcon from "../../asseets/GiftIcon-White.png"
import dressCodeIcon from "../../asseets/DressCodeIcon.png"
import sinpeIcon from "../../asseets/SinpeIcon.png"
import envelopeIcon from "../../asseets/EnvelopeIcon.png"
import transferIcon from "../../asseets/TransferIcon.png"

const InformationComponent = () => {

    return (
        <Container fluid className="background-information d-flex flex-column content-container without-overflow">
            <Row>
                <div className="col-sm-6">
                    <Row><div className="col-12"><h1 className="wedding-font center-text blue-green without-stroke">Código de vestimenta</h1></div></Row>
                    <Row><div className="col-12"><div className="dress-code-icon-container"><img src={dressCodeIcon} alt={""} className="dress-code-icon" /></div></div></Row>
                    <Row>
                        <h1 className="wedding-font-xsm blue-green">Para asistir al evento debe portar un código de vestimenta: </h1>
                        <h1 className="wedding-font-sm blue-green bold">Formal de Gala</h1>
                    </Row>
                    <Row style={{ paddingTop: "7%", paddingBottom: "7%" }}>
                        <div className="col-1"></div>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}><div className="circle" style={{ backgroundColor: "#009d71" }}></div></div>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}><div className="circle" style={{ backgroundColor: "#026842" }}></div></div>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }} ><div className="circle" style={{ backgroundColor: "#003817" }}></div></div>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}><div className="circle" style={{ backgroundColor: "black" }}></div></div>
                        <div className="col-2" style={{ paddingRight: "2px", paddingLeft: "2px" }}><div className="circle add-border" style={{ backgroundColor: "white" }}></div></div>
                        <div className="col-1"></div>
                    </Row>
                    <Row>
                        <h1 className="wedding-font-xsm" style={{ color: "red", paddingBottom: "0%"  }}>No se permite la anterior paleta de colores dentro de la vestimenta de los invitados.</h1>
                        <h1 className="wedding-font-xsm" style={{ color: "red", paddingTop: "0%" }}>Restricción con los colores negro y blanco aplica solo para las damas.</h1>
                    </Row>
                </div>
                <div className="col-sm-6" style={{ backgroundColor: "rgb(90, 119, 94)" }}>
                    <Row><h1 className="wedding-font center-text without-stroke">Mesa de Regalos</h1></Row>
                    <Row><div className="dress-code-icon-container"><img src={giftIcon} alt={""} className="dress-code-icon" /></div></Row>
                    <Row>
                        <h1 className="wedding-font-xsm without-stroke lateral-padding">Su compañia es nuestro regalo más preciado, sin embargo, cualquier muestra de cariño hacia nosotros puede realizarla a través de:</h1>
                    </Row>
                    <Row>
                        <div className="col-12" style={{ paddingRight: "0px" }}>
                            <Row className="border-bottom">
                                <div className="col-4"><div className="item-icon-container"><img src={sinpeIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8">
                                    <ul className="item-container">
                                        <li className="wedding-font-xsm">8338-4244</li>
                                        <li className="wedding-font-xsm">8647-9129</li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                        <div className="col-12">
                            <Row className="border-bottom">
                                <div className="col-4"><div className="item-icon-container"><img src={envelopeIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8"><h1 className="wedding-font-xsm item-container" style={{ textAlign: 'left' }}>Lluvia de sobres(efectivo)</h1></div>
                            </Row>
                        </div>
                        <div className="col-12">
                            <Row>
                                <div className="col-4"><div className="item-icon-container"><img src={transferIcon} alt={""} className="item-icon" /></div></div>
                                <div className="col-8">
                                    <ul className="item-container">
                                        <li className="wedding-font-xsm">Colones: CR03010200009531399045</li>
                                        <li className="wedding-font-xsm">Dólares: CR24010200009589115704</li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </div>
            </Row>
        </Container>
    )

};

export default InformationComponent;
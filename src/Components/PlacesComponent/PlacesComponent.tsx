import { Container, Row, Col } from "react-bootstrap";
import "./PlacesComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { Button } from 'react-bootstrap';
import UpperDecorator from '../../asseets/UpperCreeperDecorator.png';
import DownDecorator from '../../asseets/DownCreeperDecorator.png';
import BasilicaLosAngeles from '../../asseets/BasilicaLosAngeles.jpg';
import HaciendaPinares from '../../asseets/HaciendaPinares.jpg';

const PlacesComponent = () => {

    return (
        <Container fluid className="d-flex flex-column">
            <Row><img src={UpperDecorator} alt="icon" className="rezise-decorator"/></Row>
            <Row>
                <Col><h1 className="wedding-font blue-green center-text">Ubicaciones</h1></Col>
            </Row>
            <Row>
                <div className="col-sm-12 col-md-6">
                    <Row><img src={BasilicaLosAngeles} alt="icon" className="resize-location-picture" style={{paddingTop: "20px"}}/></Row>
                    <Row><h1 className="wedding-font-xsm blue-green">Lugar: Basilica de Los Ángeles</h1></Row>
                    <Row><h1 className="wedding-font-xsm blue-green">Dirección: Avenida 1 del Comercio, Cartago, Costa Rica</h1></Row>
                    <Row><h1 className="wedding-font-xsm blue-green">Hora: 1:30PM</h1></Row>
                    <Row><div className="d-flex justify-content-center"> 
                        <Button 
                            size="lg"  
                            style={{backgroundColor: "rgb(90, 119, 94)", borderColor: "rgb(90, 119, 94)"}} 
                            className="wedding-font-xsm location-button d-flex justify-content-center" 
                            onClick={() => {handleOpenMaps("https://maps.app.goo.gl/hsmdyphA4BjvZcXy8")}}>
                            Ver Ubicación
                        </Button>
                    </div></Row>
                </div>

                <div className="col-sm-12 col-md-6">
                <Row><img src={HaciendaPinares} alt="icon" className="resize-location-picture" style={{paddingTop: "20px"}}/></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Lugar: Hacienda Pinares</h1></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Dirección: San Rafael de Tres Ríos , Tres Ríos, Costa Rica</h1></Row>
                <Row><h1 className="wedding-font-xsm blue-green">Hora: 4:00PM</h1></Row>
                <Row><div className="d-flex justify-content-center">
                        <Button 
                            style={{backgroundColor: "rgb(90, 119, 94)", borderColor: "rgb(90, 119, 94)"}} 
                            size="lg" 
                            className="wedding-font-xsm location-button center-items" 
                            onClick={() => {handleOpenMaps("https://maps.app.goo.gl/t4GLDHmYmE1szxqW9")}}>
                                Ver Ubicación
                        </Button>
                    </div></Row>
                </div>
                
            </Row>
            <Row><img src={DownDecorator} alt="icon" style={{paddingTop: "25px"}} className="rezise-decorator"/></Row>
        </Container>
    )
};

const handleOpenMaps = (url: string) => {
    window.open(url, '_blank');
  };

export default PlacesComponent;
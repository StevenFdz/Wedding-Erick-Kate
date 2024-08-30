import { Container, Row, Col } from "react-bootstrap";
import "./GalleryComponent.css";
import "../../Sources/CommonStyleSheet.css"
import { useState } from "react";

const GalleryComponent = () => {
    const [displayedImage, setDisplayedImage] = useState("./Wedding-Erick-Kate/images/Picture1.JPG")
    const images = [
        { src: './Wedding-Erick-Kate/images/picture1.jpg', alt: 'Image 1' },
        { src: './Wedding-Erick-Kate/images/Picture2.JPG', alt: 'Image 2' },
        { src: './Wedding-Erick-Kate/images/Picture3.JPG', alt: 'Image 3' },
        { src: './Wedding-Erick-Kate/images/Picture4.JPG', alt: 'Image 4' },
        { src: './Wedding-Erick-Kate/images/Picture5.JPG', alt: 'Image 5' },
        { src: './Wedding-Erick-Kate/images/Picture6.JPG', alt: 'Image 6' },
        { src: './Wedding-Erick-Kate/images/Picture7.JPG', alt: 'Image 7' },
        { src: './Wedding-Erick-Kate/images/Picture8.JPG', alt: 'Image 8' },
        { src: './Wedding-Erick-Kate/images/Picture9.JPG', alt: 'Image 9' },
        { src: './Wedding-Erick-Kate/images/Picture10.JPG', alt: 'Image 10' },
        { src: './Wedding-Erick-Kate/images/Picture11.JPG', alt: 'Image 11' },
        { src: './Wedding-Erick-Kate/images/Picture12.JPG', alt: 'Image 12' },
        { src: './Wedding-Erick-Kate/images/Picture13.JPG', alt: 'Image 13' },
        { src: './Wedding-Erick-Kate/images/Picture14.JPG', alt: 'Image 14' },
        { src: './Wedding-Erick-Kate/images/Picture15.JPG', alt: 'Image 15' },
        { src: './Wedding-Erick-Kate/images/Picture16.JPG', alt: 'Image 16' }
    ];

    return (
        <Container fluid className="background-image-gallery d-flex flex-column">
            <Row style={{ paddingTop: "10px" }}>
                <Col><h1 className="wedding-font center-text">Nuestra galería</h1></Col>
            </Row>
            <Row>
                <div className="col-sm-6 img-main">
                    <img src={displayedImage} alt="icon" />
                </div>
                <div className="col-sm-6">
                    <Row className="scrollable">
                        {images.map((image, index) => (
                            <Col key={index} xs={4} md={3} lg={2}>
                                <div className="img-wrapper">
                                    <img src={image.src} alt={image.alt} onClick={() => setDisplayedImage(image.src)} />
                                </div>
                            </Col>

                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    )
};

export default GalleryComponent;
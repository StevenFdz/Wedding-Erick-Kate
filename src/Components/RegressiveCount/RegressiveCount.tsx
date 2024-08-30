import { Container, Row, Col } from "react-bootstrap";
import "./RegressiveCount.css";
import "../../Sources/CommonStyleSheet.css"
import SquareDateComponent from "../SquareDateComponent/SquareDateComponent";
import { useEffect, useState } from "react";
import moment from "moment";

const RegressiveCount = () => {
    const [numberDays, setNumberDays] = useState(0)
    const [numberHrs, setNumberHrs] = useState(0)
    const [numberMins, setNumberMins] = useState(0)
    const [numberSecs, setNumberSecs] = useState(0)

    let weddingDate = moment("2024-10-19 13:00:00", "YYYY-MM-DD HH:mm:ss");

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setNumberDays(weddingDate.diff(moment(), "d"))
            setNumberHrs(() => {
                var value = 13 - moment().hours()
                if (value > 0) { return value } else { return 23 + value }
            })
            setNumberMins(60 - moment().minutes())
            setNumberSecs(60 - moment().seconds())
        }, 1000);
        
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [numberDays]);

    return (
        <Container fluid className="background-image-regressive-count" style={{paddingLeft: "5%", paddingRight: "5%"}}>
            <Row>
                <h1 className="center-items wedding-font" style={{ paddingRight: "5px", paddingLeft: "5px", fontWeight: "bold", fontStyle: "normal" }}>Nuestro gran día se acerca</h1>
            </Row>
            <Row></Row>
            <Row >
                <h1 className="center wedding-font-sm" style={{paddingTop: "5%"}}>Sabado 19 de Octubre</h1>
            </Row>
            <Row className="center-vertical-content" style={{paddingBottom: "10%"}}>
                <Col xs={3} className="square">
                    <div className="items">
                        <h1 className="wedding-font-sm" style={{ margin: 0, padding: 10 }}>{numberDays}</h1>
                        <h4 className="wedding-font-xsm" style={{ paddingRight: 3, textAlign: "right", margin: 0 }}>Dias</h4>
                    </div>
                </Col>
                <Col xs={3} className="square">
                    <div className="items">
                        <h1 className="wedding-font-sm" style={{ margin: 0, padding: 10 }}>{numberHrs}</h1>
                        <h4 className="wedding-font-xsm" style={{ paddingRight: 3, textAlign: "right", margin: 0 }}>Hrs</h4>
                    </div>
                </Col>
                <Col xs={3} className="square">
                    <div className="items">
                        <h1 className="wedding-font-sm" style={{ margin: 0, padding: 10 }}>{numberMins}</h1>
                        <h4 className="wedding-font-xsm" style={{ paddingRight: 3, textAlign: "right", margin: 0 }}>Mins</h4>
                    </div>
                </Col>
                <Col xs={3} className="square">
                    <div className="items">
                        <h1 className="wedding-font-sm" style={{ margin: 0, padding: 10 }}>{numberSecs}</h1>
                        <h4 className="wedding-font-xsm" style={{ paddingRight: 3, textAlign: "right", margin: 0 }}>Secs</h4>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default RegressiveCount
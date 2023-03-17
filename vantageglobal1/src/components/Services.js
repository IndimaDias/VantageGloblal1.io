import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardL from '../utils/CardL'

import './css/services.css';


export default function Services() {
    return (
        <Container fluid className="containerServices">
            <Row className="servicesHeader">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={6}>
                        <div className="jumbotron">
                            <h1>Our Services</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me.</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Row>

            <Row className="servicesBody">
                <Row>
                    <Col sm={2}>
                    </Col >
                    <Col sm={8} className="serviceCardsRow">
                        <Row>
                            <Col>
                                <CardL title="Cloud Solutions"></CardL>
                            </Col>
                            <Col>
                                <CardL title="Managed IT Services"></CardL>
                            </Col>
                            <Col>
                                <CardL title="Disaster Recovery"></CardL>
                            </Col>

                            <Col>
                                <CardL title="Cloud Desktop"></CardL>
                            </Col>
                            <Col>
                                <CardL title="Network Solutions"></CardL>
                            </Col>
                            <Col>
                                <CardL title="Support Consulting"></CardL>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>

            </Row>


        </Container>
        )
}

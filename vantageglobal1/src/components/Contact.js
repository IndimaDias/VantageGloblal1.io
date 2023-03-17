import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './css/contact.css';

export default function Contact() {
    return (
        <Container fluid className = "formContainer" >
            <Form >
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Row>
                            <div className="fomrTitle"> Contact us </div>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control as="textarea" rows={3} placeholder="Message" />

                            </Col>
                        </Row>                                
                    </Col>
                    <Col sm={2}></Col>
                </Row>
  
            </Form>
        </Container>
        )
}
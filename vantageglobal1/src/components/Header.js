import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from '../utils/Menu';

export default function Header() {
    return (
        <Container fluid >
            <Row>
                <Col>
                    <Menu></Menu>
                </Col>

            </Row>
         
        </Container>
       
        )
}
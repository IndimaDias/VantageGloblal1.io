import Card from 'react-bootstrap/Card';

import './css/cardL.css';

export default function CardL(props) {
    return (
        <Card className="cardBlock">
                <Card.Body>
                <Card.Title className = "cardTitle">{ props.title}</Card.Title>
                    
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    
                </Card.Body>
         </Card>
        )
}
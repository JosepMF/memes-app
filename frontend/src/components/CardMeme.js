import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardMeme({ memeId, memeName, memeDescription, memeFile }) {
    return (
        <Card as={Link} to={`/one?id=${memeId}&m=${memeFile}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Card.Img variant="bottom" src={memeFile} />
            <Card.Body>
                <Card.Title>{memeName}</Card.Title>
                <Card.Text>
                    {memeDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

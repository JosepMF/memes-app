import { Container, Row, Col, Image, Card, Button, ButtonGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function OneMemePage({ memeFile }) {

    const location = useLocation();

    const query = new URLSearchParams(location.search);

    const id = query.get('id');
    const meme = query.get('m');

    return (
        <Container className="mt-4">
            <Row className="text-center">
                <Col>
                    <Image src={meme} alt="meme" className="image-fluid" />
                    <Card bg="dark" className="mt-2 p-2 text-white">
                        <ButtonGroup>
                            <Button variant="outline-success">Like {2}</Button>
                            <Button variant="outline-danger">disLike {6}</Button>
                        </ButtonGroup>
                        <div className="mt-2">
                            <b>Momer: </b><span>{'user_name'}</span>
                        </div>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

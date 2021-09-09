import { Col, Container, Row } from "react-bootstrap";

export default function NotFoundPage() {
    return (
        <Container>
            <Row style={{marginTop: '5em'}}>
                <Col xs={12} className="text-center">
                    <h1 className="text-danger">404 | NOT FOUND</h1>
                </Col>
            </Row>
        </Container>
    )
}

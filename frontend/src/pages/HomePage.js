import { Col, Container, Row } from "react-bootstrap";
import CardMeme from "../components/CardMeme";

export default function HomePage() {

    return (
        <Container className="mt-4">
            <Row xs={1} md={4} className="g-4 text-center">
                {
                    Array.from({ length: 100 }).map((_, idx) => (
                        <Col key={idx}>
                            <CardMeme
                                memeId={1}
                                memeFile="https://i.blogs.es/0ec27f/memess/450_1000.jpg"
                                memeName="Sreack"
                                memeDescription="XD"
                            />
                        </Col>
                    ))

                }
            </Row>
        </Container>
    )
}

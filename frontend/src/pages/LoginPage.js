import useAuth from "../auth/useAuth"
import { Container, Row, Col, FormControl, Button, Form, Alert, Card } from 'react-bootstrap'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [alert, setAlert] = useState(false);

    const regularExpresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const handlerChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });
    const handlerSubmit = () => {
        if (credentials.email === '' | credentials.password === '' | !regularExpresionEmail.test(credentials.email)) {
            setAlert(true)
        } else {
            login(credentials)
        }
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <Card className="p-4 text-white" style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(255,255,255,0.025)"}}>
                    {
                        alert ? <Alert variant="danger">
                            <ul>
                                {!credentials.email ? <li className="text-dark">the email is required</li> : ''}
                                {!credentials.password ? <li className="text-dark">the password is required</li> : ''}
                                {!regularExpresionEmail.test(credentials.email) ? <li className="text-dark">the email is not vaild</li> : ''}
                                {credentials.email && credentials.password ? setAlert(false) : ''}
                            </ul>
                        </Alert> : ''
                    }
                    <h3 className="text-primary">Login</h3>
                    <Form>
                        <FormControl type="email" name="email" placeholder="Email" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="text-white mt-4" onChange={handlerChange} />
                        <FormControl type="password" className="mt-2 text-white" name="password" placeholder="Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                    </Form>
                    <Button variant="outline-primary" className="mt-4" onClick={handlerSubmit}>login</Button>
                    <p className="text-white mt-4">or <span className="text-primary"><Link to="/register">register</Link></span></p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

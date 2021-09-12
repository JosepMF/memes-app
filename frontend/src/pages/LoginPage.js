import useAuth from "../auth/useAuth"
import { Container, Row, Col, FormControl, Button, Form, Alert, Card } from 'react-bootstrap'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        EMAIL: '',
        PASSWORD: ''
    });
    const [alert, setAlert] = useState(false);

    const regularExpresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const handlerChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });
    const handlerSubmit = () => {
        if (credentials.EMAIL === '' | credentials.PASSWORD === '' | !regularExpresionEmail.test(credentials.EMAIL)) {
            setAlert(true)
        } else {
            fetch(`http://localhost:3001/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(credentials)
                
            })
                .then((res) => res.json())
                .then((res) => login(res));
            
        }
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <Card className="p-4 text-white" style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(255,255,255,0.025)" }}>
                        {
                            alert ? <Alert variant="danger">
                                <ul>
                                    {!credentials.EMAIL ? <li className="text-dark">the email is required</li> : ''}
                                    {!credentials.PASSWORD ? <li className="text-dark">the password is required</li> : ''}
                                    {!regularExpresionEmail.test(credentials.EMAIL) ? <li className="text-dark">the email is not vaild</li> : ''}
                                    {credentials.EMAIL && credentials.PASSWORD ? setAlert(false) : ''}
                                </ul>
                            </Alert> : ''
                        }
                        <h3 className="text-primary">Login</h3>
                        <Form>
                            <FormControl type="email" name="EMAIL" placeholder="Email" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="text-white mt-4" onChange={handlerChange} />
                            <FormControl type="password" className="mt-2 text-white" name="PASSWORD" placeholder="Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                        </Form>
                        <Button variant="outline-primary" className="mt-4" onClick={handlerSubmit}>login</Button>
                        <p className="text-white mt-4">or <span className="text-primary"><Link to="/register">register</Link></span></p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

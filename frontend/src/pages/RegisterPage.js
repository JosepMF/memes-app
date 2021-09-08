import { useState } from "react";
import { Alert, Button, Col, Container, Form, FormControl, Row, Card } from "react-bootstrap";
import useAuth from "../auth/useAuth";

export default function RegisterPage() {

    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    });
    const [alert, setAlert] = useState(false);

    const handlerChange = (e) => setCredentials({ ...credentials, [e.target?.name]: e.target?.value });

    const regularExpresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const handlerSubmit = () => {
        if (
            credentials.username === ''                     |
            credentials.email === ''                        |
            credentials.password === ''                     |
            credentials.rePassword === ''                   |
            credentials.password !== credentials.rePassword |
            !regularExpresionEmail.test(credentials.email)
        ) {
            setAlert(true)
        } else {
            setAlert(false)
            login(credentials);
        }
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <Card className="p-4 text-white" style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(255,255,255,0.025)"}}>
                    {
                        alert ? <Alert variant="danger">
                            {!credentials.username ? <><span className="text-dark">the username is required</span><br/></> : ''}
                            {!credentials.email ? <><span className="text-dark">the email is required</span><br/></> : ''}
                            {!credentials.password ? <><span className="text-dark">the password is required</span><br/></> : ''}
                            {!credentials.rePassword ? <><span className="text-dark">the repete password is required</span><br/></> : ''}
                            {!regularExpresionEmail.test(credentials.email) ? <><span className="text-dark">the email isn't valid</span><br/></> : ''}
                            {credentials.password !== credentials.rePassword ? <><span className="text-dark">the passwords isn't similars</span><br/></> : ''}
                            {credentials.username && credentials.email && credentials.password && credentials.rePassword ? setAlert(false) : ''}
                        </Alert> : ''
                    }
                    <h3 className="text-primary">Register</h3>
                    <Form>
                        <FormControl type="text" className="mt-4 text-white" name="username" placeholder="User Name" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                        <FormControl type="email" name="email" placeholder="Email" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="text-white mt-2" onChange={handlerChange} />
                        <FormControl type="password" className="mt-2 text-white" name="password" placeholder="Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                        <FormControl type="password" className="mt-2 text-white" name="rePassword" id="rePassword" placeholder="repit Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                    </Form>
                    <Button variant="outline-primary" className="mt-4" onClick={() => handlerSubmit()}>Register</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

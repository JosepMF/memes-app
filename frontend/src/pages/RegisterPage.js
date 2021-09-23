import { useState } from "react";
import { Alert, Button, Col, Container, Form, FormControl, Row, Card } from "react-bootstrap";
import useAuth from "../auth/useAuth";

export default function RegisterPage() {

    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        NAMEUSER: '',
        EMAIL: '',
        PASSWORD: '',
        rePassword: ''        
    });
    const [alert, setAlert] = useState(false);


    const handlerChange = (e) => setCredentials({ ...credentials, [e.target?.name]: e.target?.value });

    const regularExpresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const analaicingDataOfServer = (data) => {
        if (data?.auth) {
            login(data);
        }
        else if (data?.error) {
            setAlert(true)
        }

    }

    const handlerSubmit = () => {
        if (
            credentials.USERNAME === '' |
            credentials.EMAIL === '' |
            credentials.PASSWORD === '' |
            credentials.rePassword === '' |
            credentials.PASSWORD !== credentials.rePassword |
            !regularExpresionEmail.test(credentials.EMAIL)
        ) {
            setAlert(true)
        } else {
            setAlert(false);

            const register = {
                USERNAME: credentials.USERNAME,
                EMAIL: credentials.EMAIL,
                PASSWORD: credentials.PASSWORD
            }

            fetch(`http://localhost:3001/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(register)

            })
                .then((res) => res.json())
                .then((res) => analaicingDataOfServer(res));
        }
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <Card className="p-4 text-white" style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(255,255,255,0.025)" }}>
                        {
                            alert ? <Alert variant="danger">
                                {!credentials.USERNAME ? <><span className="text-dark">the username is required</span><br /></> : ''}
                                {!credentials.EMAIL ? <><span className="text-dark">the email is required</span><br /></> : ''}
                                {!credentials.PASSWORD ? <><span className="text-dark">the password is required</span><br /></> : ''}
                                {!credentials.rePassword ? <><span className="text-dark">the repete password is required</span><br /></> : ''}
                                {!regularExpresionEmail.test(credentials.email) ? <><span className="text-dark">the email isn't valid</span><br /></> : ''}
                                {credentials.PASSWORD !== credentials.rePassword ? <><span className="text-dark">the passwords isn't similars</span><br /></> : ''}
                                {credentials.USERNAME && credentials.EMAIL && credentials.password && credentials.rePassword ? setAlert(false) : ''}
                            </Alert> : ''
                        }
                        <h3 className="text-primary">Register</h3>
                        <Form>
                            <FormControl type="text" className="mt-4 text-white" name="USERNAME" placeholder="User Name" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                            <FormControl type="email" name="EMAIL" placeholder="Email" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="text-white mt-2" onChange={handlerChange} />
                            <FormControl type="password" className="mt-2 text-white" name="PASSWORD" placeholder="Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                            <FormControl type="password" className="mt-2 text-white" name="rePassword" id="rePassword" placeholder="repit Password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} onChange={handlerChange} />
                        </Form>
                        <Button variant="outline-primary" className="mt-4" onClick={() => handlerSubmit()}>Register</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

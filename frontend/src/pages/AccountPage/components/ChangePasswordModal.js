import { useState } from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import useAuth from '../../../auth/useAuth';

export default function ChangePasswordModal({ show, close }) {
    // state of password change 
    const [newPassword, setNewPassword] = useState({
        PASSWORD: '',
        rePassword: ''
    });

    // state of error indicator
    const [notAreEcualse, setNotAreEcualse] = useState(false);

    const { user } = useAuth();

    const inputChange = (e) => setNewPassword({...newPassword, [e.target.name]: e.target.value})
    
    const handlerSubmit = (e) => {
        if (newPassword.PASSWORD !== newPassword.rePassword) {
            setNotAreEcualse(true)            
        } else {
            setNotAreEcualse(false);
            var password = {};
            password.PASSWORD = newPassword.PASSWORD;

            fetch(`http://localhost:3001/api/users/changepassword/${user.user.ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'auth-token': user.token
            },
            body: JSON.stringify(password)
        }).then(response => {
            close();
        })
        }
    }
    
    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark">
            <Modal.Header>
                <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormControl
                        name="PASSWORD"
                        placeholder="Enter your new password"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                        onChange={inputChange} />
                    <FormControl
                        name="rePassword"
                        placeholder="Repete your new password"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                        className="mt-2"
                        onChange={inputChange} />
                    {notAreEcualse ? <p className="text-danger">The passwords aren't similars</p> : ''}
            </Form>
        </Modal.Body><Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
                <Button variant="primary" onClick={() => handlerSubmit()}>Change password</Button>
            </Modal.Footer>
        </Modal>
    )
}

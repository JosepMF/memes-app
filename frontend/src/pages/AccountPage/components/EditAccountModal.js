import { useState } from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'

export default function EditAccountModal({ show, close }) {
    const { user } = useAuth();

    const [editAccount, setEditAccount] = useState({});

    const inputChange = (e) => setEditAccount({ ...editAccount, [e.target.name]: e.target.value });

    const handlerSubmit = (e) => {
        fetch(`http://localhost:3001/api/users/edituser/${user.user.ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'auth-token': user.token
            },
            body: JSON.stringify(editAccount)
        }).then(response => {
            close();
        })
    }

    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Edit Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormControl
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                        name="NAMEUSER"
                        placeholder="user name"
                        onChange={inputChange}
                        value={user.user.NAMEUSER}
                    />
                    <FormControl
                        as="textarea"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                        name="description"
                        placeholder="user description"
                        className="mt-2"
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
                <Button variant="primary" onClick={handlerSubmit}>edit</Button>
            </Modal.Footer>
        </Modal>
    )

}

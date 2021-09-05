import { Modal, Button, Form, FormControl } from 'react-bootstrap'

export default function ChangePasswordModal({ show, close }) {
    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormControl
                        name="password"
                        placeholder="Enter your new password"
                        style={{backgroundColor: 'rgba(1,1,1,0.05)'}}
                    />
                    <FormControl
                        name="password"
                        placeholder="Repete your new password"
                        style={{backgroundColor: 'rgba(1,1,1,0.05)'}}
                        className="mt-2"
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
                <Button variant="primary">Change password</Button>
            </Modal.Footer>
        </Modal>
    )
}

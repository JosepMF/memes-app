import { Modal, Button, Form, FormControl } from 'react-bootstrap'

export default function EditAccountModal({ show, close }) {
    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Edit Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormControl
                        style={{backgroundColor: 'rgba(1,1,1,0.05)'}}
                        name="username"
                        placeholder="user name"
                    />
                    <FormControl
                        as="textarea"
                        style={{backgroundColor: 'rgba(1,1,1,0.05)'}}
                        name="description"
                        placeholder="user description"
                        className="mt-2"
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
                <Button variant="primary">edit</Button>
            </Modal.Footer>
        </Modal>
    )
}

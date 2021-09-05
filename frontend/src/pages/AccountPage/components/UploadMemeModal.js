import { Modal, Button, Form, FormControl } from 'react-bootstrap'

export default function UploadMemeModal({ show, close }) {
    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Upload Meme</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form enctype="multipart/form-data">
                    <FormControl
                        type="text"
                        name="memename"
                        placeholder="Enter name meme"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                    />
                    <FormControl
                        type="text"
                        as="textarea"
                        className="mt-2"
                        name="description"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                    />
                    <Form.File
                        type="file"
                        className="mt-2"
                        name="file"
                        style={{ backgroundColor: 'rgba(1,1,1,0.05)' }}
                    />
                    <Button variant="success" className="form-control mt-2">Upload Meme</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

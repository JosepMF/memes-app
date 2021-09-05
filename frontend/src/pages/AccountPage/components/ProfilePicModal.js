import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

export default function ProfilePicModal({ show, close }) {

    const [file, setFile] = useState(null);

    const handlerFileChanged = (e) => {
        const [file] = e.target.files;

        if (file) {
            if (file.size > 210 * 1024) return alert('image no valid')

            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(reader.result);
            }
            reader.readAsDataURL(file);
        }

    }

    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Profile Image</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.File
                        custom
                        accept=".jpg, .jpeg, .gif, .png"
                        onChange={handlerFileChanged}
                    />
                </Form>
                <img
                    className="img-fluid"
                    src={file}
                    alt="profile-previw"
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

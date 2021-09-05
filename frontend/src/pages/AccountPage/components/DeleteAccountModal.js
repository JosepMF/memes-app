import { Modal, Button } from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'

export default function DeleteAccountModal({ show, close }) {
    const { logout } = useAuth();

    const deleteAccount = () => {
        logout();
    }

    return (
        <Modal show={show} onHide={() => close()} variant="modal-dark" >
            <Modal.Header>
                <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className="text-danger">
                    are you sure you want to delete your account?
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => close()}>Close</Button>
                <Button variant="danger" onClick={deleteAccount}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

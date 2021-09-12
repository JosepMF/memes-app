import { useState } from 'react';
import { Container, Row, Card, Col, Button, } from 'react-bootstrap'
import useAuth from '../../auth/useAuth';
import ChangePasswordModal from './components/ChangePasswordModal';
import EditAccountModal from './components/EditAccountModal';
import UploadMemeModal from './components/UploadMemeModal';
import DeleteAccountModal from './components/DeleteAccountModal';
import ProfilePicModal from './components/ProfilePicModal';

export default function AccountPage() {

  const { user } = useAuth();

  // create states of the modals

  const [openModalUploadMeme, setOpenModalUploadMeme] = useState(false);
  const [openModalEditAccount, setOpenModalEditAccount] = useState(false);
  const [openModalChangePassword, setOpenModalChangePassword] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false); 
  const [openModalProfilePic, setOpenModalProfilePic] = useState(false); 

  const openModal1 = () => setOpenModalChangePassword(true);
  const openModal2 = () => setOpenModalUploadMeme(true);
  const openModal3 = () => setOpenModalEditAccount(true);
  const openModal4 = () => setOpenModalDeleteAccount(true);
  const openModal5 = () => setOpenModalProfilePic(true);

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="profile"
              onClick={() => openModal5()}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col className="mt-2">
            <Card className="p-4 text-white" style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(255,255,255,0.025)" }}>
              <p className="text-center">
                <b>Name:</b> {user.USERNAME}
              </p>
              <p className="text-center">
                <b>Email:</b> {user.EMAIL}
              </p>
              <p className="text-center">
                <b>Role:</b> {user.ROLE}
              </p>

              <Button variant="outline-primary" onClick={() => openModal2()}>upload meme</Button>
              <Button variant="warning" className="mt-4" onClick={() => openModal3()}>
                edit account
              </Button>
              <Button variant="link" onClick={() => openModal1()}>change password</Button>
              <Button
                variant="link"
                className="mt-3 text-danger"
                onClick={() => openModal4()}
              >
                delete account
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modals for Account page */}
      <ChangePasswordModal show={openModalChangePassword} close={setOpenModalChangePassword}/>
      <EditAccountModal show={openModalEditAccount} close={setOpenModalEditAccount}/>
      <UploadMemeModal show={openModalUploadMeme} close={setOpenModalUploadMeme}/>
      <DeleteAccountModal show={openModalDeleteAccount} close={setOpenModalDeleteAccount}/>
      <ProfilePicModal show={openModalProfilePic} close={setOpenModalProfilePic}/>
    </>
  )
}

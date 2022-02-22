import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from '../Forms/LoginForm';


 const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
 
 <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LoginForm />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer> */}
      </Modal>
   </>
  )
}
export default Login;

import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { SignupForm } from './../Forms'

const Signup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SignupForm />
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
export default Signup;

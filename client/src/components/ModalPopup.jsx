import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalPopup = ({show, setShow})=> (
        <>           
            <Modal show={show} onHide={()=>setShow(!show)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="primary" onClick={()=>setShow(!show)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



export default ModalPopup;
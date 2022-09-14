import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalPopup = ({ show, setShow }) => (
    <>
        <Modal show={show} onHide={() => setShow(!show)}>
            <Modal.Header closeButton>
                <Modal.Title>Manage Posts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='my-4'>
                    <div className="form-group my-2">
                        <input type="text" className="text form-control " placeholder='Post title' />
                    </div>
                    <div className="form-group my-3">
                        <textarea name="" rows="5" className="form-control" placeholder='Post description'></textarea>
                    </div>
                    <div className="form-group my-2">
                        <input type="number" className="text form-control " placeholder='Post budget' />
                    </div>

                    <div className="form-group d-flex justify-content-end ">
                        <Button variant="success" >
                            Save Changes
                        </Button>
                    </div>

                </form>
            </Modal.Body>

        </Modal>
    </>
);



export default ModalPopup;
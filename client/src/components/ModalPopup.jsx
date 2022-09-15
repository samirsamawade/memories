import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPostState, modalState, updateState } from '../atom';


const ModalPopup = () => {
    const [show, setShow] = useRecoilState(modalState);
    const [update, setUpdate] = useRecoilState(updateState);

    const initialData = {
        _id: '',
        title: '',
        description: '',
        budget: 0
    };
    const [postData, setPostData] = useRecoilState(currentPostState);
    const { _id, title, description, budget } = useRecoilValue(currentPostState);

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };
    const handleClose = () => {
        setShow(!show);
        setPostData(initialData);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (_id) {
                const { data } = await axios.post('http://localhost:9000/api/posts/update-post', postData);
            }
            else {

                const { data } = await axios.post('http://localhost:9000/api/posts/create-post', postData);
            }
            
            toast.success('Successfully created',
                {

                    style: {
                        border: '1px solid #55a752',
                        padding: '16px',
                        color: '#2a7937',
                    },
                });
            setPostData(initialData)
            setShow(!show);
            setUpdate(!update);
        }
        catch (err) {
            console.log(err);
        };

    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='my-4' onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <input type="text" name='title'
                                className="text form-control "
                                placeholder='Post title'
                                onChange={handleChange}
                                value={title}
                            />
                        </div>
                        <div className="form-group my-3">
                            <textarea name="description" rows="5"
                                className="form-control"
                                placeholder='Post description'
                                onChange={handleChange}
                                value={description}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input type="number" name='budget'
                                className="text form-control "
                                placeholder='Post budget'
                                onChange={handleChange}
                                value={budget}
                            />
                        </div>

                        <div className="form-group d-flex justify-content-end ">
                            <button type="submit" 
                            className={`btn ${_id ? "btn-primary" : "btn-success"}`} >
                                {`${_id ? "Update" : "Save"} Changes`}
                            </button>
                        </div>

                    </form>
                </Modal.Body>

            </Modal>
        </>
    )
};



export default ModalPopup;
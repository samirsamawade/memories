import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ModalPopup = ({ show, setShow }) => {
    const initialData = {
        title: '',
        description: '',
        budget: 0
    };
    const [postData, setPostData] = useState(initialData);

    const handleChange = (e) => {
        setPostData({...postData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:9000/api/posts/create-post', postData);
            console.log(data);
        }
        catch(err){
            console.log(err);
        };

    };

    return(
    <>
        <Modal show={show} onHide={() => setShow(!show)}>
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
                        value={postData.title}
                        />
                    </div>
                    <div className="form-group my-3">
                        <textarea name="description" rows="5" 
                        className="form-control" 
                        placeholder='Post description'
                        onChange={handleChange} 
                        value={postData.description}
                        />
                    </div>
                    <div className="form-group my-2">
                        <input type="number" name='budget' 
                        className="text form-control " 
                        placeholder='Post budget' 
                        onChange={handleChange} 
                        value={postData.budget}
                        />
                    </div>

                    <div className="form-group d-flex justify-content-end ">
                        <button type="submit" className="btn btn-success" >
                            Save Changes
                        </button>
                    </div>

                </form>
            </Modal.Body>

        </Modal>
    </>
)};



export default ModalPopup;
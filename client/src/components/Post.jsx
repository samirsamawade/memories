import axios from 'axios';
import toast from 'react-hot-toast';
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { useRecoilState } from 'recoil';
import { currentPostState, modalState, updateState } from '../atom';

const Post = ({ post }) => {
    const { _id, title, description, budget } = post;

    const [show, setShow] = useRecoilState(modalState);
    const [currentPost, setCurrentPost] = useRecoilState(currentPostState);
    const [update, setUpdate] = useRecoilState(updateState);


    const handleUpdate = (_id, title, description, budget) => {
        setShow(!show);
        setCurrentPost({
            _id: _id,
            title: title,
            description: description,
            budget: budget,
        });
    };

    const handleDelete = async (_id) => {
        if(!confirm('Are you sure you want to delete this post?')) return;
        try {
            const { data } = await
                axios.delete(`http://localhost:9000/api/posts/delete-post/${_id}`);
            toast.success('Successfully Deleted');

            setUpdate(!update);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="col-sm-4 my-2">
            <div className="card p-3 shadow-lg">
                <div className="card-title">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <span>{budget}</span>
                    <div>
                        {/* <button className='btn btn-danger'>Delete</button> */}
                        <BiTrash role='button' className='text-danger fs-4'
                            onClick={() => handleDelete(_id)} />
                        <BiEditAlt role='button' className='text-success ms-1 fs-4'
                            onClick={() => handleUpdate(_id, title, description, budget)} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post
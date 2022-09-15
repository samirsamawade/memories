import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { useRecoilState } from 'recoil';
import { currentPostState, modalState } from '../atom';

const Post = ({ post }) => {
    const { _id, title, description, budget } = post;

    const [show, setShow] = useRecoilState(modalState);
    const [currentPost, setCurrentPost] = useRecoilState(currentPostState);

    const handleUpdate = (_id, title, description, budget) => {
        setShow(!show);
        setCurrentPost({
            _id: _id,
            title: title,
            description: description,
            budget: budget,
        });
    };

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
                        <BiTrash role='button' className='text-danger fs-4' />
                        <BiEditAlt role='button' className='text-success ms-1 fs-4'
                            onClick={() => handleUpdate(_id, title, description, budget)} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post
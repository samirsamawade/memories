const Post = ({ post }) => (
    <div className="col-sm-4 my-2">
        <div className="card p-3 shadow-lg">
            <div className="card-title">
                <h4>{post.title}</h4>
            </div>
            <div className="card-body">
                <p>{post.description}</p>
            </div>
            <div className="d-flex justify-content-between">
                <span>{post.budget}</span>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    </div>
)

export default Post
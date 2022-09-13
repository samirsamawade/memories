import { PostData } from './../data';
import Post from './Post';

const Posts = () => (
    <div className="container">
        <div className='row'>
        {
            PostData.map((post)=>(
                <Post post= {post}/>
            )
            )
        }
                </div>
        </div>
)

export default Posts
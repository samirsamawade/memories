import { PostData } from './../data';
import Post from './Post';
import axios from 'axios';
import { useEffect } from 'react';

const Posts = () => {
    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const posts = await axios.get('http://localhost:9000/api/posts/get-all-posts');
            console.log('Posts', posts);
            }
            catch(err){
                console.log(err);
            }
        };
        getAllPosts();
    }, []);

    return (

        <div className="container">
            <div className='row'>
                {
                    PostData.map((post) => (
                        <Post post={post} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Posts
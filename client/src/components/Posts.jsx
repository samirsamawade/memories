import { PostData } from './../data';
import Post from './Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('http://localhost:9000/api/posts/get-all-posts');
                setPosts(data.message);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        getAllPosts();
    }, []);

    if (loading) return <h1>Loading</h1>;

    return (

        <div className="container">
            <div className='row'>
                {
                    posts.map((post, index) => (
                        <Post key={index} post={post} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Posts
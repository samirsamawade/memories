import Post from './Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { updateState } from '../atom';
import { useRecoilState } from 'recoil';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useRecoilState(updateState);

    
    

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
    }, [update]);

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
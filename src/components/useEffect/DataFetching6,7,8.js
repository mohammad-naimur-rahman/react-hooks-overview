import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching6 = () => {
    //const [posts, setposts] = useState([]);
    const [post, setpost] = useState({});
    const [id, setid] = useState(1);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setpost(res.data))
            .catch(err => console.log(err))
    }, [idFromBtnClick])

    const handleClick = id => {
        setIdFromBtnClick(id);
    }
    return (
        <div>
            <input type="number" value={id} placeholder='Enter post id...' onChange={e => setid(e.target.value)} />
            <button onClick={handleClick}>Fetch post</button>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <div>{post.title}</div>
        </div>
    );
};

export default DataFetching6;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching1 = () => {
    // Here we will do dat fetching with useState and in the next video, with useReducer
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState('');
    const [post, setpost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setloading(false);
                setpost(res.data);
                seterror('');
            })
            .catch(err => {
                setloading(false);
                setpost('');
                seterror('Someting went wrong');
            });
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : <p>{post.title}</p>}
            {error ? <p>{error}</p> : null}
        </div>
    );
};

export default DataFetching1;
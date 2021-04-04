import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state;
    }
}

const DataFetching2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])
    return (
        <div>
            <div>
                {state.loading ? 'Loading...' : <p>{state.post.title}</p>}
                {state.error ? <p>{state.error}</p> : null}
            </div>
        </div>
    );
};

export default DataFetching2;
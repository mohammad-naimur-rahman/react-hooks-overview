import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterOneUseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>+</button>
        </div>
    );
};

export default CounterOneUseReducer;
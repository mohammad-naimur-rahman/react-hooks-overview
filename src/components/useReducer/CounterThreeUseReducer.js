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

const CounterThreeUseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>+</button>
            <br />
            <br />
            <p>{count2}</p>
            <button onClick={() => dispatch2('decrement')}>-</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
            <button onClick={() => dispatch2('increment')}>+</button>
        </div>
    );
};

export default CounterThreeUseReducer;
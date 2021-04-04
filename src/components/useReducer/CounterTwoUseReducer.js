import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2nd':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2nd':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return { ...state, firstCounter: initialState.firstCounter };
        case 'reset2nd':
            return { ...state, secondCounter: initialState.secondCounter };
        default:
            return state;
    }
}

const CounterTwoUseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Counter 1 - {count.firstCounter}</p>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>+</button>
            <br />
            <br />
            <p>Counter 2 - {count.secondCounter}</p>
            <button onClick={() => dispatch({ type: 'decrement2nd', value: 1 })}>-</button>
            <button onClick={() => dispatch({ type: 'reset2nd' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment2nd', value: 1 })}>+</button>
        </div>
    );
};

export default CounterTwoUseReducer;
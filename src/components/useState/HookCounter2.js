import React, { useState } from 'react';

const HookCounter2 = () => {
    const initialCount = 0;
    const [count, setcount] = useState(initialCount);

    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setcount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setcount(initialCount)}>Reset</button>
            <button onClick={() => setcount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setcount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    );
};

export default HookCounter2;
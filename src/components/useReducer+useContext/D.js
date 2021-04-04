import React, { useContext } from 'react';
import { GlobalContext } from '../../App';

const D = () => {
    const { countDispatch } = useContext(GlobalContext);
    return (
        <div>
            From component D
            <button onClick={() => countDispatch('decrement')}>-</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
            <button onClick={() => countDispatch('increment')}>+</button>
        </div>
    );
};

export default D;
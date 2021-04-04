import React, { useEffect, useState } from 'react';

const HookCounterUseEffect2 = () => {
    const [count, setcount] = useState(0);
    const [name, setname] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('count changed');
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setname(e.target.value)} />
            <button onClick={() => setcount(count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default HookCounterUseEffect2;
import React, { useEffect, useState } from 'react';

const HookCounter1 = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounter1;
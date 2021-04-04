import React, { useEffect, useState } from 'react';

const Counter5 = () => {
    const [count, setcount] = useState(0);

    const tick = () => {
        setcount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter5;
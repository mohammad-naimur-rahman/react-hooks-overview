import React, { useState } from 'react';

const HookCounter4 = () => {
    const [items, setitems] = useState([]);

    const handleItemAdd = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={handleItemAdd}>Add a number</button>
            <p style={{ maxWidth: '500px' }}>[
                {
                    items.map(item => <span key={item.id}>{item.value} </span>)
                }]
            </p>
        </div>
    );
};

export default HookCounter4;
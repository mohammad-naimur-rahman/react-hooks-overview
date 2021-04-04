import React, { useState } from 'react';
import HookMouse3 from './HookMouse3';

const MouseContainer4 = () => {
    const [display, setdisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setdisplay(!display)}>Toggle display</button>
            {display && <HookMouse3 />}
        </div>
    );
};

export default MouseContainer4;
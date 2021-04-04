import React, { useEffect, useState } from 'react';

const HookMouse3 = () => {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    const logMouseMove = e => {
        console.log('useEffect called');
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('event listeneres called');
        window.addEventListener('mousemove', logMouseMove)

        return () => {
            console.log('Unmounted event listeners');
            window.removeEventListener('mousemove', logMouseMove)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
};

export default HookMouse3;
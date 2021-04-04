import React, { useState } from 'react';

const HookCounter3 = () => {

    const [name, setname] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <form>
                <input type="text"
                    value={name.firstName}
                    onChange={e => setname({ ...name, firstName: e.target.value })} />
                <input type="text"
                    value={name.lastName}
                    onChange={e => setname({ ...name, lastName: e.target.value })} />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
};

export default HookCounter3;
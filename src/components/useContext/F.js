import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

const F = () => {

    const firstName = useContext(UserContext);
    const lastName = useContext(ChannelContext);

    return (
        <div>
            {firstName} {lastName}
        </div>
    );
};

export default F;
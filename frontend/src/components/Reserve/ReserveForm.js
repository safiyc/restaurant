import React from 'react';

export default props => {
    const { partySize, name } = props;
    return (
            <div role='form'>
                Party Size:
                <input type='text' value={partySize} />
                <br />
                Name:
                <input type='text' value={name}/>
            </div>
        )
    }
import React, { useState } from 'react';

const RollCall = ({ names }) => {
    const [index, setIndex] = useState(0); // set state as the index of the names array

    const handleClick = () => setIndex((index + 1) % names.length); // increment through the index of the array

    return (
        <p
        onClick={ handleClick }
        >
            { names[index] }
        </p>
    );
}

export default RollCall;
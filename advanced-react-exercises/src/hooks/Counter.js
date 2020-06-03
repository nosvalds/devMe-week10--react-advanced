import React, { useState } from 'react';

const Counter = ({ initial, max }) => {
    const [count, setCount] = useState(initial);

    const handleClick = (increment) => {
        let newCount = count + increment; // calculate the next value

        if (newCount <= max && newCount >= 0) { // check it's within bounds, then update state with that value, otherwise don't alter state
            setCount(newCount);
        } 
    }

    return (
        <>
            <p>{ count }</p>
            <div>
                <button 
                    onClick={() => handleClick(-1)} // pass increment into handleClick
                    className="btn btn-secondary m-2"
                >
                    -1
                </button>
                <button 
                    onClick={() => handleClick(1)}
                    className="btn btn-secondary m-2"
                >
                    +1
                </button>
            </div>
        </>
    );
}

export default Counter;
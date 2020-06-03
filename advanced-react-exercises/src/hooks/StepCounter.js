import React, { useState } from 'react';

const StepCounter = ({ step, max }) => {
    const [count, setCount] = useState(0);

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
                    onClick={() => handleClick(-step)} // pass increment into handleClick
                    className="btn btn-secondary m-2"
                >
                    -{ step }
                </button>
                <button 
                    onClick={() => handleClick(step)}
                    className="btn btn-secondary m-2"
                >
                    +{ step }
                </button>
            </div>
        </>
    );
}

export default StepCounter;
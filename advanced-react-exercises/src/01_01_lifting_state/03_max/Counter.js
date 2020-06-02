import React from 'react';

const Counter = ({ count, handleClick, index }) => (
            <>
                <p>
                    { count }
                </p>
                <div>
                    <button 
                        onClick={() => handleClick(-1, index)}
                        className="btn btn-secondary m-2"
                    >
                        -1
                    </button>
                    <button 
                        onClick={() => handleClick(1, index)}
                        className="btn btn-secondary m-2"
                    >
                        +1
                    </button>
                </div>
            </>
        );

export default Counter

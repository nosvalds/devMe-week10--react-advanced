import React , { useState } from 'react';

const CatchMeIfYouCan = ({ jump }) => {
    const [position, setPostition] = useState(0); // set up state position 0

    const handleClick = () => setPostition(position + jump); // increment by jump prop

    return (
        <button
            onClick={ handleClick }
            className="btn btn-danger"
            style={{
                transform: `translateY(${position}px)` // use translate to move by position
            }}
        >
            Catch Me
        </button>
    );
}

export default CatchMeIfYouCan;
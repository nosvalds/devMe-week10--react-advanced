import React , { useState } from 'react';

const CatchMeIfYouCan = ({ jump }) => {
    const [position, setClicked] = useState(0); // set up state position 0

    const handleClick = () => setClicked(position + jump); // increment by jump prop

    return (
        <button
            onClick={ handleClick }
            className="btn btn-primary"
            style={{
                transform: `translateY(${position}px)` // use translate to move by position
            }}
        >
            Catch Me
        </button>
    );
}

export default CatchMeIfYouCan;
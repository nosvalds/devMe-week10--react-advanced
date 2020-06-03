import React, { useState } from 'react';

const Clicked = () => {
    const [clicked, setClicked] = useState(false); // set up state with clicked initially false

    const handleClick = () => setClicked(!clicked); // flip boolean when handleClick is invoked

    return (
        <p
            onClick={ handleClick }
        >
            {clicked ? "Clicked!" : "Not Clicked"} {/* Use ternary to flip between Clicked/Not Clicked based on value of clicked in state */}
        </p>
    );
}

export default Clicked;
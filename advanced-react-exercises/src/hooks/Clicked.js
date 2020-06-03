import React, { useState } from 'react';

const Clicked = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);

    return (
        <p
            onClick={ handleClick }
        >
            {clicked ? "Clicked!" : "Not Clicked"}
        </p>
    );
}

export default Clicked;
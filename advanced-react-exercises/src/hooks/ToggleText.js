import React, { useState } from 'react';

const ToggleText = ({ initial, alternate }) => {
    const [clicked, setClicked] = useState(false); // initial state clicked=false

    const handleClick = () => setClicked(!clicked); // swap bool on click

    return (
        <p
            onClick={ handleClick }
        >
            {clicked ? alternate : initial} {/* if clicked = true show alternate, start with initial text when clicked is false */}
        </p>
    );
}

export default ToggleText;
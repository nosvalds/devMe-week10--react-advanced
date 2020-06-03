import React, { useState } from 'react';

const Square = ({ color }) => {
    const [clicked, setClicked] = useState(false); // initial state clicked = false

    const handleClick = () => setClicked(!clicked); // flip boolean when clicked

    return (
        <>
            <h5>Click me to turn me { !clicked ? color : "green" }</h5>
            <div 
                onClick={ handleClick } 
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: clicked ? color : "green" // if state is false, green. If clicked is true set to color prop.
                }}
            >
            </div>
        </>
    );
}

export default Square;



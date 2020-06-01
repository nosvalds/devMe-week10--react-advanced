import React from 'react';

const Square = ({ color, selected, handleClick }) =>  (
            <>
                <h3>Click me to turn me { color }</h3>
                <div 
                    onClick={ handleClick } // call handleClick func from props now
                    style={{
                        width: "200px",
                        height: "200px",
                        backgroundColor: selected ? color : "green" // if prop selected is false, green. If clicked is true set to color prop.
                    }}
                >
                </div>
            </>
        )

Square.defaultProps = {
    color: "salmon"
}

export default Square;
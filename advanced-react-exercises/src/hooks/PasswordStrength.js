import React, { useState } from 'react';

const PasswordStrength = () => {
    const [input, setInput] = useState(""); // state variable to track password input

    const handleChange = (e) => {
        setInput(e.currentTarget.value); // update
    }

    let pwLength = input.length;
    let color = "";

    if (pwLength > 0 && pwLength < 9) {
        color = "red";
    } else if (pwLength >= 9 && pwLength < 16) {
        color = "orange";
    } else if (pwLength >= 16) {
        color = "green"
    }

    return (
        <div
            
        >
            <label htmlFor="password" className="form-group">Check your password strength:</label>
            <input 
                style={{
                    backgroundColor: color
                }}
                className="form-control"
                type="password" 
                name="password"
                onChange={ handleChange }
                value={ input }
            >
            </input>
        </div>
    );
}

export default PasswordStrength;
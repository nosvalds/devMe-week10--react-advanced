import React, { useState } from 'react';

// better performance by pulling this outside of Password strength because this function is only declared once, rather than each time PasswordStrength is called to re-render the component.
let color = (password) => {
    let pwLength = password.length;
    
    // length validation logic
    if (pwLength === 0) {
        return "";
    } else if (pwLength < 9) {
        return "red";
    } else if (pwLength < 16) {
        return "orange";
    } 

    return "green"
}

const PasswordStrength = () => {
    const [input, setInput] = useState(""); // state variable to track password input

    const handleChange = (e) => {
        setInput(e.currentTarget.value); // update input field
    }

    return (
        <form className="mb-4 border border-secondary rounded p-4">
            <div className="form-group">
                <label 
                    htmlFor="password"
                >
                    Check your password strength:
                </label>
                <input 
                    style={{
                        backgroundColor: color(input)
                    }}
                    className="form-control"
                    type="password" 
                    name="password"
                    onChange={ handleChange }
                    value={ input }
                >
                </input>
            </div>
        </form>
    );
}

export default PasswordStrength;
import React from 'react';

const Password = ({ label, value, handlePWChange, valid }) => (
            <div className="form-group">
                <label>
                    { label }
                    <input 
                        type="text" 
                        value={ value }
                        onChange={ handlePWChange } // invoke this function onChange or the field
                        className={(valid ? "is-valid" : "is-invalid") + " form-control"}
                    />
                </label>
            </div>
        );

export default Password;
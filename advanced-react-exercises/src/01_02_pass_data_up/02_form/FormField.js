import React from 'react';

const FormField = ({ label, type, onChange, value }) => (
        <div className="form-group">
            <label htmlFor={ label.toLowerCase() }>{ label }</label>
            <input 
                className="form-control" 
                id={ label.toLowerCase() } 
                name={ label.toLowerCase() } 
                type={ type }
                onChange={ onChange }
                value={ value }
            />
        </div>
)

export default FormField;
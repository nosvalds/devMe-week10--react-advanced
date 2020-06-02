import React from 'react';

const FormField = ({ label, name, type, onChange, value }) => (
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input 
                className="form-control" 
                id={ name } 
                name={ name } 
                type={ type }
                onChange={ onChange }
                value={ value }
            />
        </div>
)

export default FormField;
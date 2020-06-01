import React from 'react';
import Button from './01_button/Button';
import Form from './02_form/Form';

const PassingDataUpExercises = () => (
    <div className="mx-auto" style={{width: 400}}>
        {/* 01 - Button */}
        <div className="container mb-4">
            <h2>01 Button</h2>
            <Button handleUpdate={ console.log } />
        </div>

        {/* 02 - Form */}
        <div className="container mb-4">
            <h2>02 Form</h2>
            <Form handleSubmit={ console.log } />
        </div>

        
    </div>

);

export default PassingDataUpExercises;
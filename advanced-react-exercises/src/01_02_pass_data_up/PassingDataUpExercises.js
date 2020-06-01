import React from 'react';
import Button from './01_button/Button';

const PassingDataUpExercises = () => (
    <div className="mx-auto" style={{width: 400}}>
        {/* 01 - Button */}
        <div className="container mb-4">
            <h2>01 Button</h2>
            <Button handleUpdate={ console.log } />
        </div>

        
    </div>

);

export default PassingDataUpExercises;
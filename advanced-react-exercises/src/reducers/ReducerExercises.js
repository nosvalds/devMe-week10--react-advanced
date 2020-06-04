import React from 'react';
import Clicked from './Clicked';
import StepCounter from './StepCounter';
import TempConverter from './TempConverter';


const ReducerExercises = () => (
    <div className="mx-auto" style={{width: 400}}>
        <h2 className="jumbotron">Reducer Exercises</h2>

        {/* 01 - Clicked */}
        <div className="container mb-4">
            <h3>01 Clicked</h3>
            <Clicked />
        </div>

        {/* 02 - StepCounter */}
        <div className="container mb-4">
            <h3>02 Step Counter</h3>
            <StepCounter step={ 5 } max={ 100 } />
        </div>

        {/* 03 - TempConverter */}
        <div className="container mb-4">
            <h3>03 Temp Converter</h3>
            <TempConverter />
        </div>
    </div>
    );

export default ReducerExercises;

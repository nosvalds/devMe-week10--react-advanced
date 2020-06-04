import React from 'react';
import Clicked from './Clicked';
import StepCounter from '../reducers/StepCounter';


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
    </div>
    );

export default ReducerExercises;

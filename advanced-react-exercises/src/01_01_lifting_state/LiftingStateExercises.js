import React from 'react';
import Squares from './01_Squares/Squares';
import SignUp from './02_SignUp/SignUp';

const LiftingStateExercises = () => (
    <div className="mx-auto" style={{width: 400}}>
        {/* 01 - Squares */}
        <div className="container mb-4">
            <h2>01 Squares</h2>
            <Squares color="hotpink"/>
        </div>

        {/* 02 - Sign Up */}
        <div className="container mb-4">
            <h2>02 Sign Up</h2>
            <SignUp minimumLength={ 12 }/>
        </div>

        {/* 03 - Max */}
    </div>

);

export default LiftingStateExercises;
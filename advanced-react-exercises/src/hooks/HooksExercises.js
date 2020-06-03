import React from 'react';
import Clicked from './Clicked';
import Square from './Square';

const HooksExercises = () => (
    <div className="mx-auto" style={{width: 400}}>
        <h2 className="jumbotron">Basic Hooks</h2>

        {/* 01 - Clicked */}
        <div className="container mb-4">
            <h3>01 Clicked</h3>
            <Clicked />
        </div>

        {/* 02 - Square */}
        <div className="container mb-4">
            <h3>02 Square</h3>
            <Square color="hotpink" />
        </div>
    </div>

)

export default HooksExercises;
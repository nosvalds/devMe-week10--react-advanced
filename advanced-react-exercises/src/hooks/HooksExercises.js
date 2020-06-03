import React from 'react';
import Clicked from './Clicked';
import Square from './Square';
import ToggleText from './ToggleText';

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

        {/* 03 - ToggleText */}
        <div className="container mb-4">
            <h3>03 ToggleText</h3>
            <ToggleText initial="Hello" alternate="World" />
        </div>
    </div>

)

export default HooksExercises;
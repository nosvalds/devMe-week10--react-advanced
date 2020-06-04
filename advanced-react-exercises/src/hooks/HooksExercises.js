import React from 'react';
import Clicked from './Clicked';
import Square from './Square';
import ToggleText from './ToggleText';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import PasswordStrength from './PasswordStrength';

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

        {/* 04 - Counter */}
        <div className="container mb-4">
            <h3>04 Counter</h3>
            <Counter initial={ 50 } max={ 100 } />
        </div>

        {/* 05 - StepCounter */}
        <div className="container mb-4">
            <h3>05 StepCounter</h3>
            <StepCounter max={ 100 } step={ 5 } />
        </div>

        {/* 06 - CatchMeIfYouCan */}
        <div className="container mb-4">
            <h3>06 Catch Me If You Can</h3>
            <CatchMeIfYouCan jump={ 100 } />
        </div>

        {/* 07 - Roll Call */}
        <div className="container mb-4">
            <h3>07 Roll Call</h3>
            <RollCall names={ ["Nik", "Carl", "Bob"] } />
        </div>

        {/* 08 - Password Strength */}
        <div className="container mb-4">
            <h3>08 Password Strength</h3>
            <PasswordStrength />
        </div>
    </div>

)

export default HooksExercises;
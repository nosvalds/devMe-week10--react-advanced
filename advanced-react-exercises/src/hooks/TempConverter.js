import React, { useState } from 'react';

const TempConverter = () => {
    const [tempC, setTempC] = useState(0); // state to track temps in each unit and the form inputs
    const [tempF, setTempF] = useState(32);

    const handleChangeC = (e) => {
        let tempC = e.currentTarget.value;
        let tempF = tempC * (9 / 5) + 32;
        setTempC(tempC);
        setTempF(tempF);
    }

    const handleChangeF = (e) => {
        let tempF = e.currentTarget.value;
        let tempC = (tempF - 32) * (5 / 9);
        setTempC(tempC);
        setTempF(tempF);
    }

    return (
        <form className="mb-4 border border-secondary rounded p-4">
            <div className="form-row m-2">
                <label className="form-group p-2" htmlFor="celcius">°C</label>
                <input 
                    type="number" 
                    name="celcius"
                    onChange={ handleChangeC }
                    value={ tempC }
                >
                </input>
            </div>
            <div className="form-row m-2">
                <label className="form-group p-2" htmlFor="farenheit">°F</label>
                <input 
                    type="number"
                    name="farenheit"
                    onChange={ handleChangeF } 
                    value={ tempF }
                >
                </input>
            </div>
        </form>
    );
}

export default TempConverter;
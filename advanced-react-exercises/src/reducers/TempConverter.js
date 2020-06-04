import React, { useReducer } from 'react';

const initialState = { tempC: 0, tempF: 32 };

const handleChangeC = (state, tempC) => {
    let tempF = tempC * (9 / 5) + 32;
    return {
        ...state,
        tempC: tempC,
        tempF: tempF,
    }
}
const handleChangeF = (state, tempF) => {
    let tempC = (tempF - 32) * (5 / 9);
    return {
        ...state,
        tempC: tempC,
        tempF: tempF,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_C": return handleChangeC(state, action.value);
        case "CHANGE_F": return handleChangeF(state, action.value);
        default: return state;
    }
}


const TempConverter = () => {
    const [{tempC, tempF}, dispatch] = useReducer(reducer, initialState);

    return (
        <form className="mb-4 border border-secondary rounded p-4">
            <div className="form-row m-2">
                <label className="form-group mr-2" htmlFor="celcius">°C</label>
                <input 
                    type="number" 
                    name="celcius"
                    onChange={ (e) => dispatch({ type: "CHANGE_C", value: e.currentTarget.value }) }
                    value={ tempC }
                >
                </input>
            </div>
            <div className="form-row m-2">
                <label className="form-group mr-2" htmlFor="farenheit">°F</label>
                <input 
                    type="number"
                    name="farenheit"
                    onChange={ (e) => dispatch({ type: "CHANGE_F", value: e.currentTarget.value }) } 
                    value={ tempF }
                >
                </input>
            </div>
        </form>
    )
}


export default TempConverter;
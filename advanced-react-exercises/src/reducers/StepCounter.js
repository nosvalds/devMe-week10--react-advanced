import React, { useReducer } from 'react';

const initialState = { count: 0 }; // initial state count 0

const add = (state, step, max) => {
    let newCount = state.count + step; // calculate the next value
    if (newCount <= max && newCount >= 0) { // only update state if within bounds
        return {
            ...state,
            count: newCount,
        }
    } else {
        return state;
    }
}

const subtract = (state, step, max) => {
    let newCount = state.count - step; // calculate the next value
    if (newCount <= max && newCount >= 0) { // only update state if within bounds
        return {
            ...state,
            count: newCount,
        }
    } else {
        return state;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": return add(state, action.step, action.max);
        case "SUBTRACT": return subtract(state, action.step, action.max);
        default: return state;
    }
}

const StepCounter = ({ step, max }) => {
    // set up state with useReducer
    const [{ count }, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{ count }</p>
            <div>
                <button 
                    onClick={() => dispatch({ 
                        type: "SUBTRACT", 
                        step: step,
                        max: max
                    })} // dispatch type subtract
                    className="btn btn-primary m-2"
                >
                    -{ step }
                </button>
                <button 
                    onClick={() => dispatch({ 
                        type: "ADD", 
                        step: step,
                        max: max
                    })} // dispatch type add
                    className="btn btn-primary m-2"
                >
                    +{ step }
                </button>
            </div>
        </>
    );
}

export default StepCounter;
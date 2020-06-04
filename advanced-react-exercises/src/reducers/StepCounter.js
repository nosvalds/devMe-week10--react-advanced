import React, { useReducer } from 'react';

const initialState = { count: 0 }; // initial state count 0

const StepCounter = ({ step, max }) => {
    const add = (state) => {
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
    const subtract = (state) => {
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
            case "ADD": return add(state);
            case "SUBTRACT": return subtract(state);
            default: return state;
        }
    }

    // set up state with useReducer
    const [{ count }, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{ count }</p>
            <div>
                <button 
                    onClick={() => dispatch({ type: "SUBTRACT"})} // dispatch type subtract
                    className="btn btn-primary m-2"
                >
                    -{ step }
                </button>
                <button 
                    onClick={() => dispatch({ type: "ADD"})} // dispatch type add
                    className="btn btn-primary m-2"
                >
                    +{ step }
                </button>
            </div>
        </>
    );
}

export default StepCounter;
import React, { useReducer } from 'react';

const initialState = { clicked: false }; // set up state with clicked initially false

const click = state => {
    return {
        ...state,
        clicked: true,
    };
}
// create reducer function to change clicked = true when CLICKED action happens
const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return click(state);
        default: return state;
    }
}

const Clicked = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
     
    return ( 
        <p
            onClick={ () => dispatch({ type: "CLICKED" }) } // onClick dispatch a CLICKED action
        >
            {state.clicked ? "Clicked!" : "Not Clicked"} {/* Use ternary to flip between Clicked/Not Clicked based on value of clicked in state */}
        </p>
    );
}

export default Clicked;
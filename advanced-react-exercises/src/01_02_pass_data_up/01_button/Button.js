import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { handleUpdate } = this.props; // destructure to bring handleUpdate property function into handleClick
        let updatedClicks = this.state.clicks + 1;
        handleUpdate(updatedClicks); // call and pass click as a argument

        this.setState({
            clicks: updatedClicks, // increment clicks and set state
        })
    }

    render() {
        const { clicks } = this.state;

        return (
            <button 
                className="btn btn-primary m-4"
                onClick={ this.handleClick }
            >
                CLICK TRACKER: { clicks }
            </button>
            )
    }
}

export default Button;
import React, { Component } from 'react';
import Square from './Square';

class Squares extends Component {
    constructor(props) {
        super(props);
        // track which square has been selected and is showing the color passed by the prop
        this.state = { selected: 1 }; 
    }

    render() {
        const { selected } = this.state;
        const { color } = this.props;
        return (
            <div className="container d-flex">
                <div className="container">
                    <Square 
                        color={ color } 
                        selected={ selected === 1 }
                        handleClick={ ()=>this.setState({ selected: 1 }) }
                    />
                </div>
                <div className="container">
                    <Square 
                        color={ color } 
                        selected={ selected === 2 }
                        handleClick={ ()=>this.setState({ selected: 2 }) }
                    />
                </div>
            </div>
        )
    }
}

export default Squares;
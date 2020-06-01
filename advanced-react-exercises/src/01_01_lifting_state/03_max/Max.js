import React, { Component } from 'react';
import Counter from './Counter';

class Max extends Component {
    constructor(props) {
        super(props);
        const { counts } = this.props;
        this.state = {
            counts: counts, // set counts array as initial
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(change, index) {
        const { counts } = this.state;
        
        let newCounts = [...counts];
        newCounts[index] += change;
        this.setState({ counts: newCounts});
    }
    render() {
        const { counts } = this.state;

        let max = Math.max(...counts);

        return (
            <>
                {counts.map((number, index) => (
                    <div 
                        key={ index }
                        className={number === max ? "btn btn-danger" : "btn"}
                    >
                        <Counter 
                            count={ number }
                            index={ index }
                            handleClick={ this.handleClick }
                        />
                    </div>
                ))}
            </>
        )
    }
}

export default Max;

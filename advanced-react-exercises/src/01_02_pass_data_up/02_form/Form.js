import React, { Component } from 'react';
import FormField from './FormField';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "", 
            email: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e, key) {
        let change = {};
        change[key] = e.currentTarget.value;
        this.setState(change);
    }

    handleClick(e) {
        const { handleSubmit } = this.props;
        e.preventDefault();
        this.setState({ // clear form data when button is clicked
            name: "", 
            email: ""
        })
        handleSubmit(this.state); // pass state up to the handleSubmit prop function

    }

    render() {
        const { name, email } = this.state
        return (
            <form>
                <FormField
                    label="Name"
                    type="text"
                    onChange={ (e) => this.handleChange(e, "name") }
                    value={ name }
                />
                <FormField
                    label="Email"
                    type="email"
                    onChange={ (e) => this.handleChange(e, "email") }
                    value={ email }
                />
                <button 
                    onClick={ this.handleClick }
                >
                    Submit
                </button>
            </form>
        )
    }
}
export default Form;

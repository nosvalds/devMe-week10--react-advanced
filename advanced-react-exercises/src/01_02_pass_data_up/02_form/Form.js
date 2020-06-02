import React, { Component } from 'react';
import FormField from './FormField';

class Form extends Component {
    constructor(props) {
        super(props);
        const { fields } = this.props;
        // create object with key's of the name from the fields objects to store field state { name: "", dob: "", etc.}
        this.state = fields.reduce((acc, field) => { 
            return { ...acc, [field["name"]]: "" }
        },{})
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e, name) {
        // let values = [...this.state.values]; // copy current state values
        // values[index] = e.currentTarget.value; // update the correct value using the index passed in
        this.setState({ [name]: e.currentTarget.value }); // update state
    }

    handleClick(e) {
        const { fields, handleSubmit } = this.props;
        e.preventDefault(); // prevent page from refreshing on form submit
        
        // clear values in the form on submit, use same method as in the initial state
        this.setState(fields.reduce((acc, field) => { 
            return { ...acc, [field["name"]]: "" }
        },{}))

        handleSubmit(this.state); // pass state up to the handleSubmit prop function
    }

    render() {
        const { fields } = this.props
        return (
            <form>
                { fields.map( (field, index) => ( // loop over fields and create a form field component for each. using the field object to supply props.
                    <FormField
                        key={ index }
                        label={ field["label"] }
                        type={ field["type"] }
                        name={ field["name"]}
                        onChange={ (e) => this.handleChange(e, field["name"]) }
                        value={ this.state[field["name"]] }
                    />
                ))}
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

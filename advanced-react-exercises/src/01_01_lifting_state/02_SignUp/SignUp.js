import React, { Component } from 'react';
import Password from './Password';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: ""
        }

        this.handlePWChange = this.handlePWChange.bind(this);
    }

    handlePWChange(e, label) {
        let update = {};
        update[label] = e.currentTarget.value; // create an key value pair with the correct label to set into state using the current value and the key label.
        this.setState(update);
    }

    render() {
        const { minimumLength } = this.props; // destructure and access minimumLength
        const { password, confirmPassword } = this.state;

        let valid = ( password === confirmPassword ) && ( password.length >= minimumLength ); // check validity so we can inform the password inputs if they are valid or not

        return (
            <form >
                <Password 
                    label="Password" 
                    value={ password }
                    handlePWChange={ (e) => this.handlePWChange(e, "password") } // anonymous function with "password" as second param so we can inform the method where to save this info
                    valid={ valid }
                />
                <Password 
                    label="Confirm Password" 
                    value={ confirmPassword }
                    handlePWChange={ (e) => this.handlePWChange(e, "confirmPassword")} // anonymous function with "confirmPassword" as second param so we can inform the method where to save this info }
                    valid={ valid }
                />
            </form>
        )
    }
}

export default SignUp;
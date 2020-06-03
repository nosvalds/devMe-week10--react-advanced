import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';
import FormField from '../01_02_pass_data_up/02_form/FormField';

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, name) {
        this.setState({ [name]: e.currentTarget.value }); // update state
    }

    handleSubmit(e) {

        e.preventDefault(); // keep page from refreshing
        
        const { articleID, onSubmit } = this.props;

        // Post comment to DB
        axios.post(`/articles/${ articleID }/comments`, this.state).then(() => {
            this.setState({ // clear form
                email: "",
                comment: "",
            })
            onSubmit(); // tell Comments a new comment has been added
        })
    }
    render() {
        const { email, comment } = this.state;

        return (
            <form action="post" className="mb-4 border border-secondary rounded p-4">
                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        value={ email }
                        onChange={ (e) => this.handleChange(e,"email") }
                    />
                    <FormField
                        label="Comment"
                        name="comment"
                        type="text"
                        value={ comment }
                        onChange={ (e) => this.handleChange(e,"comment") }
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={ this.handleSubmit }
                    >  
                        Create
                    </button>
                </form>
        )
    }
}

export default CreateComment;
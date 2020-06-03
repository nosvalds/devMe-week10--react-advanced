import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';
import FormField from '../01_02_pass_data_up/02_form/FormField';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, name) {
        let newValue = e.currentTarget.value
        this.setState({ [name]: newValue }); // update state
    }

    handleSubmit(e) {
        e.preventDefault(); // keep page from refreshing
        let currentState = this.state;

        // tags is a comma-delimited list and we need to turn it into an array, do some trimming to ensure we just have the tags
        currentState.tags = currentState.tags.trim().split(",").map((tag) => tag.trim())        

        // Post to DB
        axios.post("/articles", currentState).then(() => {
            this.setState({ // clear form
                title: "",
                content: "",
                tags: "",
            })
        })
    }

    render() {
        const { title, content, tags } = this.state;
        return (
            <>
                <h1 className="jumbotron">Create The News</h1>
                <form action="post" className="mb-4 border border-secondary rounded p-4">
                    <FormField
                        label="Title"
                        name="title"
                        type="text"
                        value={ title }
                        onChange={ (e) => this.handleChange(e,"title") }
                    />
                    <FormField
                        label="Article Content"
                        name="content"
                        type="text"
                        value={ content }
                        onChange={ (e) => this.handleChange(e,"content") }
                    />
                    <FormField
                        label="Tags"
                        name="tags"
                        type="text"
                        value={ tags }
                        onChange={ (e) => this.handleChange(e,"tags") }
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={ this.handleSubmit }
                    >  
                        Create
                    </button>
                </form>
            </>
        )
    }
}

export default CreateArticle;
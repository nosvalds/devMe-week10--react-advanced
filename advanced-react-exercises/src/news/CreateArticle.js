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
        this.setState({ [name]: e.currentTarget.value }); // update state, using "computed property names"
    }

    handleSubmit(e) {
        e.preventDefault(); // keep page from refreshing
        let data = {...this.state};

        // tags is a comma-delimited list and we need to turn it into an array, do some trimming to ensure we just have the tags
        // could do this with a RegEx instead
        data.tags = data.tags.split(/\s*,\s*/);        

        // Post to DB
        axios.post("/articles", data).then(() => {
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
                <form 
                    className="mb-4 border border-secondary rounded p-4"
                    onSubmit={ this.handleSubmit } // do it this way rather than onClick on the button
                    // JS is doing this function call, you do need to bind it
                >
                    <FormField
                        label="Title"
                        name="title"
                        type="text"
                        value={ title }
                        onChange={ (e) => this.handleChange(e,"title") } // slight performance hit doing it this way, could use 1 function for each
                        // since we're making the function call here in an anonymous function, binding is not neccessary
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
                    >  
                        Create
                    </button>
                </form>
            </>
        )
    }
}

export default CreateArticle;
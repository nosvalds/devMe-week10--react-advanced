import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';
import FormField from '../01_02_pass_data_up/02_form/FormField';

class EditArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props;
        // GET request for specific article, get ID from props
        axios.get(`/articles/${ id }`).then(({ data }) => {
            // set into state
            this.setState({
                title: data.data.title,
                content: data.data.content,
                tags: data.data.tags.join(", "), // join tags array to a comma-delimeted string since it's stored as an array
            })
        
        });
    }

    handleChange(e, name) {
        this.setState({ [name]: e.currentTarget.value }); // update state
    }

    handleSubmit(e) {
        const { id } = this.props;

        e.preventDefault(); // keep page from refreshing
        let currentState = {...this.state};

        // tags is a comma-delimited list and we need to turn it into an array, do some trimming to ensure we just have the tags
        currentState.tags = currentState.tags.trim().split(",").map((tag) => tag.trim())        

        // Post to DB
        axios.put(`/articles/${ id }`, currentState).then(({ data }) => {
            console.log(data.data)
        })
    }

    render() {
        const { title, content, tags } = this.state;
        return (
            <>
                <h1 className="jumbotron">Edit The News</h1>
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
                        Update
                    </button>
                </form>
            </>
        )
    }
}

export default EditArticle;
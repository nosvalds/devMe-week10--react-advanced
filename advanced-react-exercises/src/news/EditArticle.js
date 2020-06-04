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
            loaded: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props;
        // GET request for specific article, get ID from props
        axios.get(`/articles/${ id }`).then(({ data }) => {
            let article = data.data;
            // set into state
            this.setState({
                title: article.title,
                content: article.content,
                tags: article.tags.join(", "), // join tags array to a comma-delimeted string since it's stored as an array
                loaded: true,
            })
        
        });
    }

    handleChange(e, name) {
        this.setState({ [name]: e.currentTarget.value }); // update state
    }

    handleSubmit(e) {
        e.preventDefault(); // keep page from refreshing
        
        const { id } = this.props; // destructure id from props
        let data = {...this.state} // copy the state
        delete data.loaded // remove the loaded key/value pair

        // tags is a comma-delimited list and we need to turn it into an array, do some trimming to ensure we just have the tags
        data.tags = data.tags.split(/\s*,\s*/);        

        // Post to DB
        axios.put(`/articles/${ id }`, data).then(({ data }) => {
            console.log(data.data)
        })
    }

    render() {
        const { title, content, tags, loaded } = this.state;
        return !loaded ? <p>Loading...</p> : (
            <>
                <h1 className="jumbotron">Edit The News</h1>
                <form 
                    action="post" 
                    className="mb-4 border border-secondary rounded p-4"
                    onSubmit={ this.handleSubmit }
                >
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
                    >  
                        Update
                    </button>
                </form>
            </>
        )
    }
}

export default EditArticle;
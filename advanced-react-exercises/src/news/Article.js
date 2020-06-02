import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: [],
        };
    }

    componentDidMount() {
        const { id } = this.props;
        console.log(id);
        // GET request for specific article, get ID from props
        axios.get(`/articles/${ id }`).then(({ data }) => {
            // set into state
            this.setState({
                loaded: true,
                article: data.data,
            })
        
        });
    }

    render() {
        const { id } = this.props;
        const { article } = this.state;
        console.log(article);
        return (
            <p>{ id }</p>
        )
    }
}

export default Article;
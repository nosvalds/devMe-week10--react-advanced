import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';
import Comments from './Comments';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: {}, // empty object, match type
        };
    }

    componentDidMount() {
        const { id } = this.props;
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
        const { article, loaded } = this.state;
        return !loaded ? <p>Loading...</p> : (
            <>
                <div className="jumbotron mb-4">
                    <h1>The News</h1>
                </div>
                <article className="mb-4">
                    <header className="d-flex w-100 justify-content-between">
                        <div className="d-flex flex-column">
                            <h2>{ article.title }</h2>
                            
                        </div>
                        <div className="d-flex align-items-end">
                            {/* Loop to display tags */}
                            { article.tags.map((tag, index) => (
                                <p 
                                    key={ index } 
                                    className="btn btn-primary btn-sm m-2"
                                >
                                    { tag }
                                </p>
                            ))}
                        </div>
                    </header>
                    <p>{ article.content }</p>
                </article>
                <Comments articleID={ article.id } />
            </>
        )
    }
}

export default Article;
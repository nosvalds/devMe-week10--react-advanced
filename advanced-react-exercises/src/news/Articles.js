import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        };
    }

    componentDidMount() {
        // GET request for articles
        axios.get("/articles").then(({ data }) => {
            // set into state
            this.setState({
                loaded: true,
                articles: data.data,
            })
        
        });
    }
    
    render() {
        const { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <div className="jumbotron mb-4">
                    <h1>The News</h1>
                </div>
                <ul className="list-group">
                    { articles.map(article => (
                    <li key= { article.id } className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <div className="d-flex flex-column">
                                <h3>{ article.title }</h3>
                            </div>
                            <div className="d-flex align-items-end">
                                {/* Loop to display tags */}
                                { article.tags.map((tag, index) => (
                                    <p 
                                        key={ index } 
                                        className="btn btn-primary m-2"
                                    >
                                        { tag }
                                    </p>
                                ))}
                            </div>
                        </div>
                    </li>
                    )) }
                </ul>
            </>
        )
    }
}
export default Articles;
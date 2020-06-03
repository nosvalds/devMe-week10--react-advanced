import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';
import CreateComment from './CreateComment';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    getComments() {
        const { articleID } = this.props;
        // GET request for specific article, get ID from props
        axios.get(`/articles/${ articleID }/comments`).then(({ data }) => {
            // set into state
            this.setState({
                loaded: true,
                comments: data.data,
            })
        }); 
    }

    componentDidMount() {
        this.getComments();
    }

    handleSubmit() { 
        this.getComments();
    }

    render() {
        const { comments, loaded } = this.state;
        const { articleID } = this.props;

        return !loaded ? <p>Loading comments...</p> : (
            <div className="container mb-4">
                <h4>Comments</h4>
                <div className="container mb-4">
                    { comments.length === 0 ? <p>No comments yet...</p> : (
                        <ul className="list-group">
                            { comments.map(comment => ( // loop on array of comment objects 
                                <li key={ comment.id } className="list-group-item"> {/* need to include key of comment id for React */}
                                    <div className="d-flex w-100 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <h6>{ comment.email }</h6> {/* content */}
                                            <p>{ comment.comment }</p>
                                        </div>
                                    </div>
                                </li>
                            )) }
                        </ul>
                    )}
                </div>
                <CreateComment 
                    articleID={ articleID } 
                    onSubmit={ this.handleSubmit } // use this to pass data up and trigger the handleSubmit funciton when a createcomment form is submitted and reload the comments to show the new one
                />
            </div>
        )
    }
}

export default Comments;
import React, { Component } from 'react';
import axios from '../02_01_ajax/axios';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        };
    }

    componentDidMount() {
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

    render() {
        const { comments, loaded } = this.state;
        console.log(comments);
        return !loaded ? <p>Loading comments...</p> : (
            <div className="container">
                <h4>Comments</h4>
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
        )
    }
}

export default Comments;
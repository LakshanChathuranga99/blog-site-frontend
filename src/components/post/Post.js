import React, { Component } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';

import posts from "../../db";
import './Post.css';
import Comment from '../comment/Comment';
import AddComment from '../addComment/AddComment';

class PostField extends Component {
    state = { postlist: posts };

    render() {
        let id = this.props.match.params.id;
        return (
            <React.Fragment>
                <div className="ContainerPost">
                    <h2>{this.state.postlist[id - 1].heading}</h2><hr /><br />
                    <p>{this.state.postlist[id - 1].content}</p>
                    <hr />

                    <div className="btnGrp">
                        <div className="postReactionCount">
                            <p>Excelent Reactions - {this.state.postlist[id - 1].excelent} | Good Reactions - {this.state.postlist[id - 1].good}</p>
                        </div>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Good</Button>
                            <Button variant="secondary">Excelent</Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div className="ContainerComment">

                    <AddComment postID ={id-1}/>
                    <br />

                    <label><b>Comments</b></label>
                    <hr />

                    {
                        (this.state.postlist[id - 1].commentSection) ? (
                            this.state.postlist[id - 1].commentSection.map((comment) => {
                                return <Comment comments={comment} key={comment.id} postID ={id} commentID ={comment.id}/>
                            })
                        ) : "No Comments yet"

                    }

                </div>
            </React.Fragment>

        );
    }
}

export default PostField;